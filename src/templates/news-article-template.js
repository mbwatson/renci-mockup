import React, { Fragment } from 'react'
import { useTheme } from 'styled-components'
import { graphql, Link } from 'gatsby'
import { Container } from '../components/layout'
import { Meta, Title } from '../components/typography'
import { Hero } from '../components/hero'
import { Visible } from 'react-grid-system'
import { HorizontalRule } from '../components/horizontal-rule'
import { ChevronLeftIcon, ChevronRightIcon } from '../components/icons'

export default ({ data, pageContext }) => {
    const theme = useTheme()
    const { article: {
        frontmatter: {
            title,
            featuredImage,
            publish_date,
            author,
        },
        html: articleHTML
    }} = data
    const { prevArticle, nextArticle } = pageContext

    return (
        <Fragment>
            <Hero backgroundImage={ featuredImage && featuredImage.childImageSharp.fullSize }></Hero>

            <Container>
                <Title>{ title }</Title>

                <Meta>
                    Published on { publish_date } by <Link to={ `/people/${ author.id }` }>{ author.name }</Link>
                </Meta>

                <div dangerouslySetInnerHTML={{ __html: articleHTML }} />

                <HorizontalRule />

                <div style={{ display: 'flex', padding: '1rem 0' }}>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-start' }}>
                        {
                            prevArticle && (
                                <Fragment>
                                    <ChevronLeftIcon size={ 24 } fill={ theme.color.darkgrey } />
                                    <Link to={ prevArticle.path }>
                                        PREVIOUS <Visible md lg xl>ARTICLE</Visible><br/>
                                        <Meta>{ prevArticle.frontmatter.title }</Meta>
                                    </Link>
                                </Fragment>
                            )
                        }
                    </div>
                    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
                        {
                            nextArticle && (
                                <Fragment>
                                    <Link to={ nextArticle.path }>
                                        NEXT <Visible md lg xl>ARTICLE</Visible><br/>
                                        <Meta>{ nextArticle.frontmatter.title }</Meta>
                                    </Link>
                                    <ChevronRightIcon size={ 24 } fill={ theme.color.darkgrey } />
                                </Fragment>
                            )
                        }
                    </div>
                </div>
            </Container>
        </Fragment>
    )
}

export const newsQuery = graphql`
    query($slug: String!) {
        article: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
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
        }
    }
`