import React from 'react'
import styled from 'styled-components'
import { Container as Grid, Row, Col } from 'react-grid-system'
import { Heading } from '../../components/typography'
import { useProjects } from '../../hooks'
import { ArrowLink } from '../../components/link'

const NavColumn = styled.div`
    padding: 1rem;
`

const NavHeading = styled(Heading)`
    font-size: 150% !important;
`

const NavList = styled.ul`
    display: block;
    list-style-type: none;
    margin: 0;
`

const NavListItem = styled.li`
    margin: 5px 0;
`

export const ResearchSubmenu = () => {
    const projects = useProjects()

    return (
        <Grid fluid component="nav" style={{ width: '100%' }}>
            <Row>
                <Col xs={ 12 } component={ NavColumn }>
                    <NavHeading>Research at RENCI</NavHeading>
                    <NavList style={{ listStyleType: 'none', columnCount: 3 }}>
                        { projects.map((project, i) => <NavListItem key={ project.id }><ArrowLink to={ project.fields.path } text={ project.name } /></NavListItem>) }
                    </NavList>
                </Col>
            </Row>
        </Grid>
    )
}
