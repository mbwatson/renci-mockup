import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Header }from './header'
import { Main } from './main'
import { Footer } from './footer'
import { Link } from 'gatsby'
import { Menu, MobileMenu } from '../../menu'
import { useBrand, useWindow } from '../../../hooks'

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

const Brand = styled(Link).attrs({
    to: '/',
    alt: 'Navigate to RENCI Home'
})``

export const DefaultLayout = ({ children }) => {
    const { windowWidth } = useWindow()
    const [compact, setCompact] = useState(windowWidth < 768)
    const renciLogo = useBrand()

    useEffect(() => setCompact(windowWidth < 768), [windowWidth])

    return (
        <Page>
            <Header compact={ compact }>
                <Brand>
                    <Img fixed={ renciLogo.fixed } style={{ width: '180px', margin: '0 2rem' }} imgStyle={{ width: 'auto', height: '100%' }} alt="Navigate to RENCI Home" />
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
