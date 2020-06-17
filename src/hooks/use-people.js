import { graphql, useStaticQuery } from 'gatsby'

const peopleQuery = graphql`{
    people: allPeopleYaml {
        edges {
            node {
                id
                name
                email
                title
            }
        }
    }
}`

export const usePeople = () => {
    const { people } = useStaticQuery(peopleQuery)
    return people.edges.map(({ node }) => node)
}
