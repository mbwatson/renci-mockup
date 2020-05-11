import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import { Card, CardHeader, CardBody } from '../components/card'
import { Heading } from '../components/typography'
import { useNews } from '../hooks'

const NewsPage = () => {
    const articles = useNews()

    return (
        <Fragment>
            <SEO title="RENCI News" />
            
            <h1>News</h1>

            {
                articles.map(article => {
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

        </Fragment>
    )
}

export default NewsPage
