import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from "../components/layout"

export default ({ data, pageContext }) => {
    const { teamsYaml: {
        name,
        members
    }} = data
    
    return (
        <Layout>
            <h1>{ name }</h1>

            <h3>Members</h3>
            <div>
                {
                    members.map(person => (
                        <div><Link to={ `/people/${ person.id }` }>{ person.name }</Link></div>
                    ))
                }
            </div>

            <br/>
        </Layout>
    )
}

export const groupQuery = graphql`
    query($id: String!) {
        teamsYaml( id: { eq: $id }) {
            name
            members {
                id
                name
            }
        }
    }
`