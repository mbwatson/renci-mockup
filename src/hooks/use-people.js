import { graphql, useStaticQuery } from 'gatsby'

const peopleQuery = graphql`{
    people: allPeopleYaml {
        edges {
            node {
                id
                name
                email
                title
                fields {
                    path
                }
            }
        }
    }
}`

export const usePeople = () => {
    const { people } = useStaticQuery(peopleQuery)
    return people.edges.map(({ node }) => node)
}
