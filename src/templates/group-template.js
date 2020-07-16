import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Container, Article, Section, Hero, HorizontalRule } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { SocialLinks } from '../components/social-links'
import { ArrowLink } from '../components/link'
import { ArticlePreview } from '../components/news'

export default ({ data, pageContext }) => {
    const { groupsYaml: {
        name,
        lead,
        members,
        online_presence,
        projects,
        news,
        featuredImage,
    }} = data
    return (
        <Fragment>
            <Hero backgroundImage={ featuredImage && featuredImage.childImageSharp.fluid }>
                <Title>{ name }</Title>
                <Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid incidunt quaerat distinctio est, inventore. Asperiores ex repudiandae quam saepe, blanditiis sed temporibus est dolore aperiam nobis? Aliquam eveniet, sit assumenda.
                </Paragraph>
            </Hero>

            <Container>
                <SocialLinks url={ online_presence.url } twitter={ online_presence.twitter } github={ online_presence.github } />

                {
                    news && (
                        <Section title="News">
                            {
                                news.map((article, i) => {
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

                <HorizontalRule />
                
                <Section title="Projects">
                    <Article title="Current">
                        {
                            projects ? projects.map(project => (
                                <Fragment key={ project.id }>
                                    <ArrowLink to={ `/projects/${ project.id }` } text={ project.name } /> <br/>
                                </Fragment>
                            )) : <div>&empty;</div>
                        }
                    </Article>
                    <Article title="Past">
                        <div><ArrowLink to="#" text="Lorem ipsum" /></div>
                        <div><ArrowLink to="#" text="Optio tempora" /></div>
                    </Article>
                </Section>
                
                <HorizontalRule />
                
                <Section title="Contributors">
                    {
                        members.map(person => (
                            <Fragment key={ person.id }>
                                <ArrowLink to={ `/people/${ person.id }` } text={ `${ person.name } ${ person.id === lead.id ? '(lead)' : '' }` } /> <br/>
                            </Fragment>
                        ))
                    }
                </Section>
                
                <HorizontalRule />
                
                <Section title="Publications">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ex sapiente excepturi blanditiis veniam debitis non ratione minus, sit quae. Quae ut reiciendis soluta eveniet corporis nisi obcaecati excepturi, accusantium!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus labore, dolorem sunt mollitia voluptate illo quas minima porro voluptatum voluptates eos molestiae error cupiditate recusandae velit quisquam molestias est praesentium, quod necessitatibus consequuntur veritatis? Laborum cupiditate, repudiandae libero nobis dignissimos unde, modi qui totam rem impedit nam illum cumque.</p>
                </Section>
                
            </Container>
            
        </Fragment>
    )
}

export const groupQuery = graphql`
    query($id: String!) {
        groupsYaml( id: { eq: $id }) {
            id
            name
            featuredImage {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            lead {
                id
                name
            }
            members {
                id
                name
            }
            online_presence {
                url
                twitter
                github
            }
            projects {
                id
                name
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