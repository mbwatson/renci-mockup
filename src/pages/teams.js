import React from "react"
import { graphql } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"

const TeamsPage = ({ data }) => {
    const teams = data.allTeamsYaml.edges

    return (
        <Layout>
            <SEO title="RENCI Staff" />
            
            <h1>Teams</h1>

            {
                teams.map(({ node: team }) => (
                    <div key={ team.id }>
                        <h2>{ team.name }</h2>
                        <div>
                            {
                                team.members.map(person => (
                                    <div key={ `${ team.id }-${ person.id }` }>{ person.name }</div>
                                ))
                            }
                        </div>
                        <br/>
                    </div>
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
