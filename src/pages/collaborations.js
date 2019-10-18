import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"
import { MiniProfile } from '../components/user'
import { Container, Row, Col } from 'react-grid-system'
import { Card, CardHeader, CardBody } from '../components/card'
import { Heading, Subheading } from '../components/typography'

const CollaborationsPage = ({ data }) => {
    const collaborations = data.allCollaborationsYaml.edges

    return (
        <Layout>
            <SEO title="RENCI Collaborations" />
            
            <h1>Collaborations</h1>

            {
                collaborations.map(({ node: collaboration }) => (
                    <Card key={ collaboration.id }>
                        <CardHeader>
                            <Heading><Link to={ `/collaborations/${ collaboration.id }` }>{ collaboration.name }</Link></Heading>
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

        </Layout>
    )
}

export const query = graphql`
    query {
        allCollaborationsYaml {
            edges {
                node {
                    id
                    name
                    members {
                        id
                        name
                    }
                }
            }
        }
    }
`

export default CollaborationsPage
