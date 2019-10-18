import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"
import { MiniProfile } from '../components/user'
import { Card, CardHeader, CardBody } from '../components/card'
import { Heading, Subheading } from '../components/typography'

const TeamsPage = ({ data }) => {
    const teams = data.allTeamsYaml.edges

    return (
        <Layout>
            <SEO title="RENCI Teams" />
            
            <h1>Teams</h1>

            {
                teams.map(({ node: team }) => (
                    <Card key={ team.id }>
                        <CardHeader>
                            <Heading><Link to={ `/teams/${ team.id }` }>{ team.name }</Link></Heading>
                        </CardHeader>

                        <CardBody>
                            <Subheading>Members</Subheading>
                            {
                                team.members && team.members.map(person => (
                                    <MiniProfile key={ `${ team.id }-${ person.id }` } person={ person } />
                                ))
                            }
                        </CardBody>
                        
                    </Card>
                ))
            }

        </Layout>
    )
}

export const query = graphql`
    query {
        allTeamsYaml {
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

export default TeamsPage
