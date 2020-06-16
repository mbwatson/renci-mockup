import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import { Header }from './header'
import { Main } from './main'
import { Footer } from './footer'
import { Link } from 'gatsby'
import { Menu, MobileMenu } from '../../menu'
import { useBrand, useWindow } from '../../../hooks'
import { Container as Grid, Row, Col } from 'react-grid-system'
import "../../../styles/base.css"

export const Page = styled.div(({ theme }) => `
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: ${ theme.color.primary.main };
    max-width: 1600px;
    margin: auto;
`)

const FooterContents = () => {
    return (
        <Grid fluid>
            <Row>
                <Col xs={ 12 } md={ 3 }>
                    <p>
                        RENCI <br/>
                        100 Europa Drive, Suite 540 <br/>
                        Chapel Hill, NC  27517
                    </p>
                    <p>media@renci.org</p>
                    <p>919-445-9540</p>
                </Col>
                <Col xs={ 12 } md={ 3 }>
                    <strong>More</strong>
                    <p>
                        About <br/>
                        Careers <br/>
                        Partners <br/>
                        Room Reservations
                    </p>
                </Col>
                <Col xs={ 12 } md={ 3 }>
                    <strong>Connect</strong>
                    <p>
                        Twitter <br/>
                        Facebook <br/>
                        LinkedIn <br/>
                        Instagram <br/>
                        YouTube <br/>
                        RSS
                    </p>
                </Col>
                <Col xs={ 12 } md={ 3 }>
                    &copy; { new Date().getFullYear() }
                </Col>
            </Row>
        </Grid>
    )
}

const menuItems = [
    { path: '/', text: 'Home' },
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
    const [compact, setCompact] = useState(windowWidth < 1000)
    const logos = useBrand()


    useEffect(() => setCompact(windowWidth < 1000), [windowWidth])

    return (
        <Page>
            <Header>
                <Brand>
                    <Img fixed={ logos.light } style={{ width: '180px', margin: '0 1rem' }} imgStyle={{ width: 'auto', height: '100%' }} alt="Navigate to RENCI Home" />
                </Brand>
                { compact ? <MobileMenu items={ menuItems } /> : <Menu items={ menuItems } /> }
            </Header>
            <Main>{ children }</Main>
            <Footer>
                <FooterContents />
            </Footer>
        </Page>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
}
