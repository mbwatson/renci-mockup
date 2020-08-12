import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Container, Article, Section, Hero } from '../components/layout'
import { Title } from '../components/typography'
import { ArrowLink } from '../components/link'
import { StaffList } from '../components/people'

export default ({ data, pageContext }) => {
    const { teamsYaml: {
        name,
        description,
        featuredImage,
        people,
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
                        {
                            people.map(person => (
                                <Fragment key={ person.id }>
                                    <ArrowLink to={ person.fields.path } text={ person.fullName } /> <br/>
                                </Fragment>
                            ))
                        }
                    </Article>
                </Section>

                <Section title="Team Members">
                    <StaffList staff={ people } />    
                </Section>

            </Container>
        </Fragment>
    )
}

export const teamQuery = graphql`
    query($id: String!) {
        teamsYaml( id: { eq: $id }) {
            name
            description
            featuredImage {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            people {
                id
                fullName
                name {
                    first
                    last
                }
                title
                fields {
                    path
                }
            }
        }
    }
`