import { graphql, useStaticQuery } from 'gatsby'

const newsQuery = graphql`{
   spotlight: allMarkdownRemark(sort: {fields: frontmatter___publish_date, order: DESC}, filter: {frontmatter: {spotlight: {eq: true}}}) {
      edges {
         node {
            id
            frontmatter {
                title
                spotlight
                    featuredImage {
                        childImageSharp {
                            fullSize: fluid {
                                ...GatsbyImageSharpFluid
                            }
                            previewSize: fixed(width: 400, height: 400) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                    publish_date(formatString: "dddd, MMMM Do, YYYY")
                    author {
                        id
                        name
                    }
                }
                excerpt(pruneLength: 500)
            }
        }
    }
}`

export const useNewsSpotlight = () => {
    const { spotlight } = useStaticQuery(newsQuery)
    return spotlight.edges.map(({ node }) => node)
}
