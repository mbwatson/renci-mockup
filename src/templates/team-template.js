import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Hero } from '../components/hero'
import { Title } from '../components/typography'
import { Section } from '../components/section'
import { Article } from '../components/article'
import { Container } from '../components/layout'
import { ArrowLink } from '../components/link'

export default ({ data, pageContext }) => {
    const { teamsYaml: {
        name,
        description,
        members,
        lead,
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
                <Section title="Team Details">

                    <Article title="Description">
                        { description }
                    </Article>
                    
                    <Article title="Members">
                        { members.map(person => <div><ArrowLink key={ person.id } to={ `/people/${ person.id }` } text={ `${ person.name } ${ person.id === lead.id ? '(lead)' : '' }` } /></div>) }
                    </Article>
                </Section>

            </Container>
        </Fragment>
    )
}

export const groupQuery = graphql`
    query($id: String!) {
        teamsYaml( id: { eq: $id }) {
            name
            description
            lead {
                id
                name
            }
            members {
                id
                name
            }
        }
    }
`