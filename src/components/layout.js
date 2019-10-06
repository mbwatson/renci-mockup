import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Page } from './page'
import { Header }from "./header"
import { Main }from "./main"
import { Footer } from "./footer"
import { Link } from "gatsby"
import { Menu, MenuItem } from './menu'

import "../styles/base.css"

const Layout = ({ children }) => {
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
                <h1 style={{ margin: 0 }}>
                    <Link to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        { data.site.siteMetadata.title }
                    </Link>
                </h1>
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

export default Layout
