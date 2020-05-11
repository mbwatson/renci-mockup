import { graphql, useStaticQuery } from 'gatsby'

const collaborationsQuery = graphql`{
    collaborations: allCollaborationsYaml {
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
            }
        }
    }
}`

export const useCollaborations = () => {
    const { collaborations } = useStaticQuery(collaborationsQuery)
    return collaborations.edges.map(({ node }) => node)
}
