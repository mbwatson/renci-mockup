import { graphql, useStaticQuery } from 'gatsby'

const newsQuery = graphql`{
    news: allMarkdownRemark {
        edges {
            node {
                id
                frontmatter {
                    title
                    publish_date
                    author {
                        id
                        name
                    }
                }
                html
            }
        }
    }
}`

export const useNews = () => {
    const { news } = useStaticQuery(newsQuery)
    return news.edges.map(({ node }) => node)
}
