import { graphql, useStaticQuery } from 'gatsby'

const newsQuery = graphql`{
    news: allMarkdownRemark {
        edges {
            node {
                id
                frontmatter {
                    title
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
                excerpt(pruneLength: 250)
            }
        }
    }
}`

export const useNews = () => {
    const { news } = useStaticQuery(newsQuery)
    return news.edges.map(({ node }) => node)
}
