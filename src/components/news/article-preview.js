import React, { Fragment } from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { Subheading } from '../typography'
import { Container as Grid, Row, Col, Visible } from 'react-grid-system'

const Wrapper = styled.article`
    margin: 1rem;
`

const ImageContainer = styled.div`
`

const ArticleDate = styled.h2`
    font-size: 95%;
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    line-height: 2.35;
`

const ArticleTitle = styled(Subheading)`
    font-weight: bold;
`

const BodyContainer = styled.div`
    max-height: 200px;
    overflow-y: hidden;
`

export const ArticlePreview = ({ article }) => {
    const hasFeaturedImage = article.frontmatter.featuredImage !== null
    return (
        <Wrapper>
            <Grid fluid>
                <Row>
                    {
                        hasFeaturedImage && (
                            <Fragment>
                                <Visible xs sm>
                                    <Col xs={ 12 }>
                                        <Img
                                            fluid={ article.frontmatter.featuredImage.childImageSharp.fullSize }
                                                imgStyle={{ width: 'auto', height: '100%' }}
                                            alt="Featured image"
                                        />
                                    </Col>
                                </Visible>
                                <Visible md lg xl>
                                    <Col md={ 4 } lg={ 3 }>
                                        <Img
                                            fixed={ article.frontmatter.featuredImage.childImageSharp.previewSize }
                                            style={{ width: '100%', height: '200px' }}
                                            alt="Featured image"
                                        />
                                    </Col>
                                </Visible>
                            </Fragment>
                        )
                    }
                    <Col xs={ 12 } md={ hasFeaturedImage ? 8 : 12 } lg={ hasFeaturedImage ? 9 : 12 }>
                        <BodyContainer>
                            <ArticleDate>{ article.frontmatter.publish_date }</ArticleDate>
                            <ArticleTitle>{ article.frontmatter.title }</ArticleTitle>
                            <div dangerouslySetInnerHTML={{ __html: article.excerpt }} />
                        </BodyContainer>
                    </Col>
                </Row>
            </Grid>
        </Wrapper>
    )
}
