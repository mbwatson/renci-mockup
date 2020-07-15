import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Container, Article, Section, HorizontalRule } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { SocialLinks } from '../components/social-links'
import { ArticlePreview } from '../components/news'

export default ({ data, pageContext }) => {
    const { projectsYaml: {
        name,
        description,
        online_presence,
        news,
    }} = data
    
    return (
        <Container>
            <Title>{ name }</Title>

            <HorizontalRule />

            <SocialLinks url={ online_presence.url } twitter={ online_presence.twitter } github={ online_presence.github } />
            
            {
                news && (
                    <Section title="News">
                        {
                            news.map((article, i) => {
                                return (
                                    <Fragment key={ article.id }>
                                        <ArticlePreview article={ article } compact />
                                        { i < news.length - 1 && <HorizontalRule /> }
                                    </Fragment>
                                )
                            })
                        }
                    </Section>
                )
            }

            <HorizontalRule />

            <Section title="Project Details">
                <Article title="Description">
                    <Paragraph>{ description }</Paragraph>
                </Article>

                <Article title="Some More Stuff">
                    <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum provident ipsa incidunt, minus laborum itaque sequi quia hic commodi quod perspiciatis aperiam, iste facere fugit eligendi deserunt corporis iusto doloribus.</Paragraph>
                </Article>
            </Section>

        </Container>
    )
}

export const projectQuery = graphql`
    query($id: String!) {
        projectsYaml( id: { eq: $id }) {
            name
            description
            online_presence {
                url
                twitter
                github
            }
            news {
                id
                frontmatter {
                    title
                    publish_date(formatString: "MMMM DD, YYYY")
                    featuredImage {
                        childImageSharp {
                            previewSize: fixed(width: 300, height: 300) {
                                ...GatsbyImageSharpFixed
                            }
                        }
                    }
                }
                excerpt(pruneLength: 500)
            }
        }
    }
`