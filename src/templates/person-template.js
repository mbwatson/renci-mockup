import React from 'react'
import { graphql } from 'gatsby'
import { Container, Article, Section } from '../components/layout'
import { Title, Heading, HorizontalRule } from '../components/layout'
import { SocialLinks } from '../components/social-links'
import { ArrowLink } from '../components/link'

export default ({ data, pageContext }) => {
    const { peopleYaml: { name, title, email, office, online_presence, bio, groups, collaborations, teams }} = data

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
                        { groups.map(group => <div><ArrowLink to={ `/groups/${ group.id }` } text={ group.name } /></div>) }
                    </Section>
                )
            }

            {
                collaborations && (
                    <Section title="Collaborations">
                        { collaborations.map(collaboration => <div><ArrowLink to={ `/collaborations/${ collaboration.id }` } text={ collaboration.name } /></div>) }
                    </Section>
                )
            }

            {
                teams && (
                    <Section title="Teams">
                        { teams.map(team => <div><ArrowLink to={ `/teams/${ team.id }` } text={ team.name } /></div>) }
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