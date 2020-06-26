import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/layout'
import { Title, Heading } from '../components/typography'
import { SocialLinks } from '../components/social-links'
import { Section } from '../components/section'
import { Article } from '../components/article'

export default ({ data, pageContext }) => {
    const { peopleYaml: { name, title, email, office, online_presence, bio, groups, collaborations, teams }} = data

    return (
        <Container>
            <Title>{ name }</Title>
            <Heading>{ title }</Heading>
            <SocialLinks url={ online_presence.url } twitter={ online_presence.twitter } github={ online_presence.github } />

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

            <Section></Section>

            {
                groups && (
                    <Section title="Groups">
                        { groups.map(group => <div>{ group.name }</div>) }
                    </Section>
                )
            }

            {
                collaborations && (
                    <Section title="Collaborations">
                        { collaborations.map(collaboration => <div>{ collaboration.name }</div>) }
                    </Section>
                )
            }

            {
                teams && (
                    <Section title="Teams">
                        { teams.map(team => <div>{ team.name }</div>) }
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
            }
            groups {
                id
                name
            }
            collaborations {
                id
                name
            }
        }
    }
`