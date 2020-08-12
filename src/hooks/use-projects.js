import { graphql, useStaticQuery } from 'gatsby'

const projectsQuery = graphql`{
    projects: allProjectsYaml(sort: {fields: name, order: ASC}) {
        edges {
            node {
                id
                name
                email
                description
                online_presence {
                    url
                    github
                    twitter
                }
                fields {
                    path
                }
            }
        }
    }
}`

export const useProjects = () => {
    const { projects } = useStaticQuery(projectsQuery)
    return projects.edges.map(({ node }) => node)
}
