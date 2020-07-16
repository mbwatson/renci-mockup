import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import { MiniProfile } from '../components/people'
import { Container, Row, Col } from 'react-grid-system'
import { Card, CardHeader, CardBody } from '../components/card'
import { Heading, Subheading } from '../components/typography'
import { useCollaborations } from '../hooks'

const CollaborationsPage = () => {
    const collaborations = useCollaborations()

    return (
        <Fragment>
            <SEO title="RENCI Collaborations" />
            
            <h1>Collaborations</h1>

            {
                collaborations.map(collaboration => (
                    <Card key={ collaboration.id }>
                        <CardHeader>
                            <Heading><Link to={ collaboration.fields.path }>{ collaboration.name }</Link></Heading>
                        </CardHeader>

                        <CardBody>
                            <Container>
                                <Row>
                                    <Col xs={ 12 } sm={ 6 }>
                                        <Subheading>Members</Subheading>
                                        {
                                            collaboration.members && collaboration.members.map(person => (
                                                <MiniProfile key={ `${ collaboration.id }-${ person.id }` } person={ person } />
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

export default CollaborationsPage
