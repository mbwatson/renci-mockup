import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"
import { MiniProfile } from '../components/user'

const TeamsPage = ({ data }) => {
    const teams = data.allTeamsYaml.edges

    return (
        <Layout>
            <SEO title="RENCI Teams" />
            
            <h1>Teams</h1>

            {
                teams.map(({ node: team }) => (
                    <div key={ team.id }>
                        <h2><Link to={ `/teams/${ team.id }` }>{ team.name }</Link></h2>
                        { team.members && team.members.map(person => <MiniProfile key={ person.id } person={ person } />) }
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
