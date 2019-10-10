import React from "react"
import { graphql } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"
import { Profile } from '../components/user'

const PeoplePage = ({ data }) => {
    const staff = data.allPeopleYaml.edges

    return (
        <Layout>
            <SEO title="RENCI Staff" />
            
            <h1>Staff</h1>

            {
                staff.map(({ node: person }) => (
                    <Profile person={ person } />
                ))
            }

        </Layout>
    )
}

export const query = graphql`
    query {
        allPeopleYaml {
            edges {
                node {
                    id
                    name
                    teams {
                        id
                        name
                    }
                    groups {
                        id
                        name
                    }
                }
            }
        }
    }
`

export default PeoplePage
