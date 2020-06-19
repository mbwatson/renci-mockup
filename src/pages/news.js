import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { SEO } from '../components/seo'
import { Card, CardHeader, CardBody } from '../components/card'
import { Title } from '../components/typography'
import { useNews } from '../hooks'
import { Section } from '../components/section'
import { ArticlePreview } from '../components/news'
import { HorizontalRule } from '../components/horizontal-rule'

const NewsPage = () => {
    const articles = useNews()

    return (
        <Fragment>
            <SEO title="RENCI News" />
            
            <Title>News at RENCI</Title>
            
            <Section fullWidth>
                {
                    articles.map(article => {
                        return (
                            <Fragment>
                                <ArticlePreview key={ article.id } article={ article } />
                                <HorizontalRule />
                            </Fragment>
                        )
                    })
                }
            </Section>

        </Fragment>
    )
}

export default NewsPage
