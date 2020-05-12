import { graphql, useStaticQuery } from 'gatsby'

const logoQuery = graphql`{
    allImageSharp(filter: {fluid: {originalImg: {regex: "/renci.png/"}}}) {
        edges {
            node {
                id
                fluid(maxWidth: 180) {
                    ...GatsbyImageSharpFluid
                }
                fixed(width: 180) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }
}`

export const useBrand = () => {
    const data = useStaticQuery(logoQuery)
    const fluid = data.allImageSharp.edges[0].node.fluid
    const fixed = data.allImageSharp.edges[0].node.fixed
    return { fluid, fixed }
}
