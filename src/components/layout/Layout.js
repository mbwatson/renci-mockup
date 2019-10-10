import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Header }from './Header'
import { Brand } from '../typography'
import { Main } from './Main'
import { Footer } from './Footer'
import { Link } from 'gatsby'
import { Menu, MobileMenu } from '../menu'
import "../../styles/base.css"
import { useWindowWidth } from '@mwatson/usewindowwidth'

export const Page = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

const menuItems = [
    { path: '#', text: 'Home' },
    { path: '/people', text: 'People' },
    { path: '/groups', text: 'Groups' },
    { path: '/projects', text: 'Projects' },
    { path: '/teams', text: 'Teams' },
    { path: '/news', text: 'News' },
]

export const Layout = ({ children }) => {
    const { windowWidth, SM } = useWindowWidth()
    const isCompact = windowWidth < SM
    const [compact, setCompact] = useState(isCompact)

    useEffect(() => {
        setCompact(isCompact)
    }, [windowWidth])

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
            <Header compact={ compact }>
                <Brand center={ compact }>
                    <Link to="/"
                        style={{
                            color: `white`,
                            textDecoration: `none`,
                        }}
                    >
                        { data.site.siteMetadata.title }
                    </Link>
                </Brand>
                { compact ? <MobileMenu items={ menuItems } /> : <Menu items={ menuItems } /> }
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
