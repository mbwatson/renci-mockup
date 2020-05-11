import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO } from "../components/seo"
import { DefaultLayout } from "../components/layout"
import { Card, CardHeader, CardBody } from '../components/card'
import { Heading } from '../components/typography'

const NewsPage = ({ data }) => {
    const articles = data.allMarkdownRemark.edges

    return (
        <DefaultLayout>
            <SEO title="RENCI News" />
            
            <h1>News</h1>

            {
                articles.map(({ node: article }) => {
                    const author = article.frontmatter.author
                    return (
                        <Card key={ article.id }>
                            <CardHeader>
                                <Heading><Link to={ `/news/${ article.id }` }>{ article.frontmatter.title }</Link></Heading>
                            </CardHeader>

                            <CardBody>
                                By <Link to={ `/people/${ author.id }`} >{ author.name }</Link> <br/><br/>
                                <div dangerouslySetInnerHTML={{ __html: article.html }} />
                            </CardBody>
                        </Card>
                    )
                })
            }

        </DefaultLayout>
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

export default NewsPage
