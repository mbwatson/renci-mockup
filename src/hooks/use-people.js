import { graphql, useStaticQuery } from 'gatsby'

const peopleQuery = graphql`{
    people: allPeopleYaml {
        edges {
            node {
                id
                name
                email
                title
                teams {
                    id
                    name
                }
                groups {
                    id
                    name
                }
                collaborations {
                    id
                    name
                }
            }
        }
    }
}`

export const usePeople = () => {
    const { people } = useStaticQuery(peopleQuery)
    return people.edges.map(({ node }) => node)
}
