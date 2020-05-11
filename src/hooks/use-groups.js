import { graphql, useStaticQuery } from 'gatsby'

const groupsQuery = graphql`{
    groups: allGroupsYaml {
        edges {
            node {
                id
                name
                description
                members {
                    id
                    name
                    email
                    title
                }
                online_presence {
                    url
                    github
                    twitter
                }
                projects {
                    id
                    name
                    description
                }
            }
        }
    }
}`

export const useGroups = () => {
    const { groups } = useStaticQuery(groupsQuery)
    return groups.edges.map(({ node }) => node)
}
