import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Hero } from '../components/hero'
import { Title } from '../components/typography'
import { SocialLinks } from '../components/social-links'
import { Container, Section } from '../components/layout'
import { ArrowLink } from '../components/link'

export default ({ data, pageContext }) => {
    const { collaborationsYaml: {
        name,
        members,
        projects,
        online_presence,
        featuredImage
    }} = data
    return (
        <Fragment>
            <Hero backgroundImage={ featuredImage && featuredImage.childImageSharp.fluid }>
                <Title>{ name }</Title>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid incidunt quaerat distinctio est, inventore. Asperiores ex repudiandae quam saepe, blanditiis sed temporibus est dolore aperiam nobis? Aliquam eveniet, sit assumenda.
                </p>
            </Hero>

            <Container>
                <SocialLinks url={ online_presence.url } twitter={ online_presence.twitter } github={ online_presence.github } />
                
                <Section title="Contributors">
                    { members.map(person => <div><ArrowLink key={ person.id } to={ `/people/${ person.id }` } text={ person.name } /></div>) }
                </Section>

                <br/>

                {
                    projects && projects.map(project => (
                        <Section title="Projects">
                            <div><ArrowLink to={ `/projects/${ project.id }` } text={ project.name } /></div>
                        </Section>
                    ))
                }

            </Container>
        </Fragment>
    )
}

export const collaborationQuery = graphql`
    query($id: String!) {
        collaborationsYaml( id: { eq: $id }) {
            name
            members {
                id
                name
            }
            online_presence {
                url
                twitter
                github
            }
        }
    }
`