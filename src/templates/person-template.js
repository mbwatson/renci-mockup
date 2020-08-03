import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import { Container, Article, Section, HorizontalRule } from '../components/layout'
import { Title, Heading, Paragraph } from '../components/typography'
import { SocialLinks } from '../components/social-links'
import { ArrowLink } from '../components/link'
import { ArticlePreview } from '../components/news'
import { Profile } from '../components/people'
import { useAvatar } from '../hooks'

export default ({ data, pageContext }) => {
    const {
        peopleYaml: { name, photo, title, email, office, online_presence, bio, groups, collaborations, teams, news, authoredNews }
    } = data
    const avatar = useAvatar()
    const allNews = [].concat(news, authoredNews).filter(n => n !== null)

    return (
        <Container>

            <Profile
                name={ `${ name.first } ${ name.last }` }
                title={ title }
                email={ email }
                online_presence={ online_presence }
                bio={ bio }
                photo={ photo ? photo.childImageSharp.fixed : avatar.childImageSharp.fixed }
                phone={ office.phone }
            />

            <Section title="About">
                <Paragraph>
                    { bio }
                </Paragraph>
            </Section>

            <Section title="Contributions">
                {
                    groups && (
                        <Article title="Research Groups">
                            {
                                groups.map(group => (
                                    <Fragment key={ group.id }>
                                        <ArrowLink to={ group.fields.path } text={ group.name } /> <br/>
                                    </Fragment>
                                ))
                            }
                        </Article>
                    )
                }

                {
                    collaborations && (
                        <Article title="Collaborations">
                            {
                                collaborations.map(collaboration => (
                                    <Fragment key={ collaboration.id }>
                                        <ArrowLink to={ collaboration.fields.path } text={ collaboration.name } /> <br/>
                                    </Fragment>
                                ))
                            }
                        </Article>
                    )
                }

                {
                    teams && (
                        <Article title="Teams">
                            {
                                teams.map(team => (
                                    <Fragment key={ team.id }>
                                        <ArrowLink to={ team.fields.path } text={ team.name } /> <br/>
                                    </Fragment>
                                ))
                            }
                        </Article>
                    )
                }
            </Section>

            {
                allNews && (
                    <Section title="Recent News">
                        {
                            allNews.slice(0, 2).map((article, i) => (
                                <Fragment key={ article.id }>
                                    <ArticlePreview article={ article } path={ article.fields.path } compact />
                                    { i < allNews.length - 1 && <HorizontalRule /> }
                                </Fragment>
                            ))
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
            name {
                first
                last
            }
            email
            title
            office {
                location
                phone
            }
            photo {
                childImageSharp {
                    fixed(width: 350, height: 350) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
            online_presence {
                twitter_username
                github_username
                url
                instagram
                linkedin
                youtube
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
            authoredNews {
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