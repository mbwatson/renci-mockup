import { graphql, useStaticQuery } from 'gatsby'

const newsQuery = graphql`{
    news: allMarkdownRemark(sort: {fields: frontmatter___publish_date, order: DESC}) {
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
                            previewSize: fixed(width: 300, height: 300) {
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
                html
                excerpt(pruneLength: 500)
            }
        }
    }
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

export const useNews = () => {
    const { news } = useStaticQuery(newsQuery)
    return news.edges.map(({ node }) => node)
}

export const useNewsSpotlight = () => {
    const { spotlight } = useStaticQuery(newsQuery)
    return spotlight.edges.map(({ node }) => node)
}
