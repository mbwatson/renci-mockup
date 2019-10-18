import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"
import { MiniProfile } from '../components/user'
import { Container, Row, Col } from 'react-grid-system'
import { Card, CardHeader, CardBody, CardFooter } from '../components/card'
import { Heading, Subheading } from '../components/typography'

const ResearchPage = ({ data }) => {
    const groups = data.allGroupsYaml.edges

    return (
        <Layout>
            <SEO title="RENCI Groups" />
            
            <h1>Research Groups</h1>

            {
                groups.map(({ node: group }) => (
                    <Card key={ group.id }>
                        <CardHeader>
                            <Heading><Link to={ `/groups/${ group.id }` }>{ group.name }</Link></Heading>
                        </CardHeader>

                        <CardBody>
                            <Container>
                                <Row>
                                    <Col xs={ 12 } sm={ 6 }>
                                        <Subheading>Members</Subheading>
                                        {
                                            group.members && group.members.map(person => (
                                                <MiniProfile key={ `${ group.id }-${ person.id }` } person={ person } />
                                            ))
                                        }
                                    </Col>
                                    <Col xs={ 12 } sm={ 6 }>
                                        <Subheading>Projects</Subheading>
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

        </Layout>
    )
}

export const query = graphql`
    query {
        allGroupsYaml {
            edges {
                node {
                    id
                    name
                    members {
                        id
                        name
                    }
                    projects {
                        id
                        name
                    }
                }
            }
        }
    }
`

export default ResearchPage
