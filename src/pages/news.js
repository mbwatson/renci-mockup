import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"
import { ArticlePreview } from '../components/news'

const NewsPage = ({ data }) => {
    const articles = data.allMarkdownRemark.edges

    return (
        <Layout>
            <SEO title="RENCI News" />
            
            <h1>News</h1>

            {
                articles.map(({ node: article }) => (
                    <ArticlePreview>
                        <pre>
                            { JSON.stringify(article, null, 2) }
                        </pre>
                    </ArticlePreview>
                ))
            }

        </Layout>
    )
}

export const query = graphql`
    query {
        allMarkdownRemark {
            edges {
                node {
                    id
                    frontmatter {
                        title
                        publish_date
                        author
                    }
                }
            }
        }
    }`

export default NewsPage
