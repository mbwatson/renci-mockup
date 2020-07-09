import React from 'react'
import { graphql } from 'gatsby'
import { Container } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { SocialLinks } from '../components/social-links'
import { Section } from '../components/section'
import { Article } from '../components/article'
import { HorizontalRule } from '../components/horizontal-rule'

export default ({ data, pageContext }) => {
    const { projectsYaml: {
        name,
        description,
        online_presence
    }} = data
    
    return (
        <Container>
            <Title>{ name }</Title>

            <HorizontalRule />

            <SocialLinks url={ online_presence.url } twitter={ online_presence.twitter } github={ online_presence.github } />
            
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
        }
    }
`