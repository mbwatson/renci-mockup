import React, { Fragment, useEffect, useState } from 'react'
import { graphql } from 'gatsby'
import { Container, Article, Section, Hero, HorizontalRule } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { SocialLinks } from '../components/social-links'
import { ArticlePreview } from '../components/news'
import { ArrowLink } from '../components/link'

export default ({ data, pageContext }) => {
    const { projectsYaml: {
        name,
        email,
        featuredImage,
        description,
        online_presence,
        projects,
        news,
    }} = data
    const [currentProjects, setCurrentProjects] = useState([])
    const [pastProjects, setPastProjects] = useState([])
    
    useEffect(() => {
        if (projects) {
            setCurrentProjects(projects.filter(project => !project.archived))
            setPastProjects(projects.filter(project => project.archived))
        }
    }, [projects])

    return (
        <Fragment>
            <Hero backgroundImage={ featuredImage && featuredImage.childImageSharp.fluid }>
                <Title>{ name }</Title>
                <div>{ email }</div>
                <Paragraph>
                    { description }
                </Paragraph>
            </Hero>

            <Container>
                <SocialLinks url={ online_presence.url } twitter={ online_presence.twitter } github={ online_presence.github } />
                
                <Section title="Project Details">
                    <Article title="Description">
                        <Paragraph>{ description }</Paragraph>
                    </Article>
                </Section>

                {
                    news && (
                        <Section title="Recent News">
                            {
                                news.slice(0, 2).map((article, i) => {
                                    return (
                                        <Fragment key={ article.id }>
                                            <ArticlePreview article={ article } path={ article.fields.path } compact />
                                            { i < news.length - 1 && <HorizontalRule /> }
                                        </Fragment>
                                    )
                                })
                            }
                        </Section>
                    )
                }

                {
                    projects && (
                        <Section title="Projects">
                            {
                                currentProjects.length > 0 && (
                                    <Article title="Current">
                                        {
                                            currentProjects.map(project => (
                                                <Fragment key={ project.id }>
                                                    <ArrowLink to={ project.fields.path } text={ project.name } /> <br/>
                                                </Fragment>
                                            ))
                                        }
                                    </Article>
                                )
                            }
                            {
                                pastProjects.length > 0 && (
                                    <Article title="Past">
                                        {
                                            pastProjects.map(project => (
                                                <Fragment key={ project.id }>
                                                    <ArrowLink to={ project.fields.path } text={ project.name } /> <br/>
                                                </Fragment>
                                            ))
                                        }
                                    </Article>
                                )
                            }
                        </Section>
                    )
                }

            </Container>
        </Fragment>
    )
}

export const projectQuery = graphql`
    query($id: String!) {
        projectsYaml( id: { eq: $id }) {
            name
            email
            description
            featuredImage {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            online_presence {
                url
                twitter
                github
            }
            projects {
                id
                name
                fields {
                    path
                }
            }
            news {
                id
                fields {
                    path
                }
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