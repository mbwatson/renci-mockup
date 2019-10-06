import React from "react"
import styled from 'styled-components'
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Header }from "./header"
import { Brand } from '../brand'
import { Main }from "./main"
import { Footer } from "./footer"
import { Link } from "gatsby"
import { Menu, MenuItem } from '../menu'
import "../../styles/base.css"

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <Page>
            <Header>
                <Brand>
                    <Link to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        { data.site.siteMetadata.title }
                    </Link>
                </Brand>
                <Menu>
                    <MenuItem to="#">Home</MenuItem>
                    <MenuItem to="/people">People</MenuItem>
                    <MenuItem to="/groups">Groups</MenuItem>
                    <MenuItem to="/projects">Projects</MenuItem>
                    <MenuItem to="/teams">Teams</MenuItem>
                </Menu>
            </Header>
            <Main>{ children }</Main>
            <Footer>
                &copy; { new Date().getFullYear() }
            </Footer>
        </Page>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
