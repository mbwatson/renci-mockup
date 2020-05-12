import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import { Brand } from '../../typography'
import { Header }from './header'
import { Main } from './main'
import { Footer } from './footer'
import { Link } from 'gatsby'
import { Menu, MobileMenu } from '../../menu'
import { useWindow } from '../../../hooks'

import "../../../styles/base.css"

export const Page = styled.div(({ theme }) => `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: ${ theme.color.primary.main };
`)

const menuItems = [
    { path: '#', text: 'Home' },
    { path: '/people', text: 'People' },
    { path: '/groups', text: 'Groups' },
    { path: '/collaborations', text: 'Collaborations' },
    { path: '/news', text: 'News' },
    { path: '/events', text: 'Events' },
]

export const DefaultLayout = ({ children }) => {
    const { windowWidth } = useWindow()
    const isCompact = windowWidth < 768
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
            <Header compact={ isCompact }>
                <Brand center={ isCompact }>
                        { data.site.siteMetadata.title }
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

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
