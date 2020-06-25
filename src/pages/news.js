import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Container} from '../components/layout'
import { Title } from '../components/typography'
import { useNews } from '../hooks'
import { Section } from '../components/section'
import { ArticlePreview } from '../components/news'
import { HorizontalRule } from '../components/horizontal-rule'

const NewsPage = () => {
    const articles = useNews()

    return (
        <Container className="container">
            <SEO title="RENCI News" />
            
            <Title>News at RENCI</Title>
            
            <Section fullWidth>
                {
                    articles.map((article, i) => {
                        return (
                            <Fragment key={ article.id }>
                                <ArticlePreview article={ article } />
                                { i < articles.length - 1 && <HorizontalRule /> }
                            </Fragment>
                        )
                    })
                }
            </Section>

        </Container>
    )
}

export default NewsPage
