import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Container, Article, Section, HorizontalRule } from '../components/layout'
import { Title, Heading } from '../components/typography'
import { SocialLinks } from '../components/social-links'
import { ArrowLink } from '../components/link'
import { ArticlePreview } from '../components/news'

export default ({ data, pageContext }) => {
    const { peopleYaml: { name, title, email, office, online_presence, bio, groups, collaborations, teams, news }} = data

    return (
        <Container>
            <Title>{ name }</Title>
            <Heading>{ title }</Heading>
            
            <HorizontalRule />

            <SocialLinks url={ online_presence.url } twitter={ online_presence.twitter_username } github={ online_presence.github_username } />

            <Section title="Details">
                <Article title="Contact">
                    email: { email } <br/>
                    office: { office.location } <br/>
                    phone: { office.phone } <br/>
                </Article>
                <Article title="Biography">
                    { bio }
                </Article>
            </Section>

            {
                groups && (
                    <Section title="Groups">
                        { groups.map(group => <div key={ group.id }><ArrowLink to={ group.fields.path } text={ group.name } /></div>) }
                    </Section>
                )
            }

            {
                collaborations && (
                    <Section title="Collaborations">
                        { collaborations.map(collaboration => <div key={ collaboration.id }><ArrowLink to={ collaboration.fields.path } text={ collaboration.name } /></div>) }
                    </Section>
                )
            }

            {
                teams && (
                    <Section title="Teams">
                        { teams.map(team => <div key={ team.id }><ArrowLink to={ team.fields.path } text={ team.name } /></div>) }
                    </Section>
                )
            }

            <HorizontalRule />
            
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

        </Container>
    )
}

export const personQuery = graphql`
    query($id: String!) {
        peopleYaml( id: { eq: $id }) {
            id
            name
            email
            title
            office {
                location
                phone
            }
            online_presence {
                twitter_username
                github_username
                url
            }
            bio
            teams {
                id
                name
                fields {
                    path
                }
            }
            groups {
                id
                name
                fields {
                    path
                }
            }
            collaborations {
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