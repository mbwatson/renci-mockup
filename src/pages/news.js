import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Container, Section, HorizontalRule } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { useNews } from '../hooks'
import { ArticlePreview } from '../components/news'

const NewsPage = () => {
    const articles = useNews()

    return (
        <Container className="container">
            <SEO title="RENCI News" />
            
            <Title>News at RENCI</Title>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Officia odio, reiciendis adipisci aliquid officiis libero quos alias,
                distinctio laboriosam aliquam hic, nisi minus obcaecati recusandae esse dolor sequi dolore dolores!
                Libero aperiam, adipisci cum natus eaque officiis consequatur, laboriosam?
                Alias fugiat similique officiis eaque minima, vitae atque! Iure nemo,
                nesciunt cum possimus nulla aut tenetur!
            </Paragraph>

            <Section fullWidth>
                {
                    articles.map((article, i) => {
                        return (
                            <Fragment key={ article.id }>
                                <ArticlePreview article={ article } path={ article.path } />
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
