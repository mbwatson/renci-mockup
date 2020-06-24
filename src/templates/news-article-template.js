import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { Hero } from '../components/hero'

export default ({ data, pageContext }) => {
    const { article: {
        frontmatter: {
            title,
            featuredImage,
            publish_date,
            author,
        },
        html: articleHTML
    }} = data
    return (
        <Fragment>
            <Hero backgroundImage={ featuredImage && featuredImage.childImageSharp.fullSize }>
            </Hero>

            <Container>
                <Title>{ title }</Title>

                <div dangerouslySetInnerHTML={{ __html: articleHTML }} />
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