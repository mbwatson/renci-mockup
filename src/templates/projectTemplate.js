import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from "../components/layout"

export default ({ data, pageContext }) => {
    const { projectsYaml: {
        name,
        description,
        group,
    }} = data
    
    return (
        <Layout>
            <h1>{ name }</h1>
            
            <p>{ description }</p>

            <p>This project is owned by <Link to={ `/groups/${ group.id }` }>{ group.name }</Link> </p>
        </Layout>
    )
}

export const projectQuery = graphql`
    query($id: String!) {
        projectsYaml( id: { eq: $id }) {
            name
            description
            group {
                id
                name
            }
        }
    }
`