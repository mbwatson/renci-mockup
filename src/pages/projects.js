import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"
import { Card, CardHeader, CardBody, CardFooter } from '../components/card'
import { Heading, Subheading } from '../components/typography'

const ProjectsPage = ({ data }) => {
    const projects = data.allProjectsYaml.edges

    return (
        <Layout>
            <SEO title="RENCI Projects" />
            
            <h1>Projects</h1>

            {
                projects.map(({ node: project }) => (
                    <Card key={ project.id }>
                        <CardHeader>
                            <Heading><Link to={ `/projects/${ project.id }` }>{ project.name }</Link></Heading>
                        </CardHeader>

                        <CardBody>
                            <p>{ project.description }</p>
                        </CardBody>
                        
                    </Card>
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
