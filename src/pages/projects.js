import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"

const ProjectsPage = ({ data }) => {
    const projects = data.allProjectsYaml.edges

    return (
        <Layout>
            <SEO title="RENCI Projects" />
            
            <h1>Projects</h1>

            {
                projects.map(({ node: project }) => (
                    <div key={ project.id }>
                        <h2>{ project.name }</h2>
                        <p>{ project.description }</p>
                        <Link to={ `/projects/${ project.id }` }>View</Link>
                        
                        <br/><br/>
                    </div>
                ))
            }

        </Layout>
    )
}

export const query = graphql`
    query {
        allProjectsYaml {
            edges {
                node {
                    id
                    name
                    description
                }
            }
        }
    }
`

export default ProjectsPage
