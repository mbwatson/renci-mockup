import { graphql, useStaticQuery } from 'gatsby'

const projectsQuery = graphql`{
    projects: allProjectsYaml {
        edges {
            node {
                id
                name
                description
                online_presence {
                    url
                    github
                    twitter
                }
            }
        }
    }
}`

export const useProjects = () => {
    const { projects } = useStaticQuery(projectsQuery)
    return projects.edges.map(({ node }) => node)
}
