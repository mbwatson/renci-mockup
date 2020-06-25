import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/layout'
import { LinkIcon, TwitterIcon, GitHubIcon } from '../components/icons'
import { Title, Heading } from '../components/typography'
import { SocialLinks } from '../components/social-links'
import { Section } from '../components/section'
import { Article } from '../components/article'

export default ({ data, pageContext }) => {
    const { peopleYaml: { name, title, email, office, online_presence }} = data

    return (
        <Container>
            <Title>{ name }</Title>
            <Heading>{ title }</Heading>
            <SocialLinks url={ online_presence.url } twitter={ online_presence.twitter } github={ online_presence.github } />

            <Section title="Contact">
                <Article title="Lorem ipsum">
                    email: { email } <br/>
                    office: { office.location } <br/>
                    phone: { office.phone } <br/>
                </Article>
            </Section>

            <br/>

            <Section title="Groups">
                Lorem ipsum
            </Section>

            <br/>

            <Section title="Collaborations">
                Lorem ipsum
            </Section>

            <br/>

            <Section title="Teams">
                Lorem ipsum
            </Section>

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
        }
    }
`