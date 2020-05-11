import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import { MiniProfile } from '../components/user'
import { Container, Row, Col } from 'react-grid-system'
import { Card, CardHeader, CardBody } from '../components/card'
import { Heading } from '../components/typography'
import { useGroups } from '../hooks'

const ResearchPage = () => {
    const groups = useGroups()
    console.log(groups)

    return (
        <Fragment>
            <SEO title="RENCI Groups" />
            
            <h1>Research Groups</h1>

            {
                groups.map(group => (
                    <Card key={ group.id }>
                        <CardHeader>
                            <Heading><Link to={ `/groups/${ group.id }` }>{ group.name }</Link></Heading>
                        </CardHeader>

                        <CardBody>
                            <Container>
                                <Row>
                                    <Col xs={ 12 } sm={ 6 }>
                                        <span>Members ({ (group.members && group.members.length) || '0' })</span>
                                        {
                                            group.members && group.members.map(person => (
                                                <MiniProfile key={ `${ group.id }-${ person.id }` } person={ person } />
                                            ))
                                        }
                                    </Col>
                                    <Col xs={ 12 } sm={ 6 }>
                                        <span>Projects ({ (group.projects && group.projects.length) || '0' })</span>
                                        {
                                            group.projects && group.projects.map(project => (
                                                <div key={ `${ group.id }-${ project.id }` }>
                                                    <Link to={ `/projects/${ project.id }` }>{ project.name }</Link>
                                                </div>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </Container>
                        </CardBody>
                        
                    </Card>
                ))
            }

        </Fragment>
    )
}

export default ResearchPage
