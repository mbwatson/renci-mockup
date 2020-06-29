import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { Hero } from '../components/hero'
import { Container } from '../components/layout'
import { Title } from '../components/typography'
import { SocialLinks } from '../components/social-links'
import { Section } from '../components/section'
import { Article } from '../components/article'
import { HorizontalRule } from '../components/horizontal-rule'
import { ArrowLink } from '../components/link'

export default ({ data, pageContext }) => {
    const { groupsYaml: {
        name,
        lead,
        members,
        projects,
        online_presence,
        featuredImage,
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

                <Section title="News & Events">
                    <Article title="Lorem ipsum">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo alias, velit cumque numquam, blanditiis consequuntur provident debitis illo eaque repellendus excepturi maxime! Quas vel totam delectus quisquam eligendi, perferendis nisi.</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ducimus, est, blanditiis, suscipit dolorem cumque incidunt officiis sit sunt laborum, iure iusto molestiae reprehenderit nobis! Officiis veniam odio, minus distinctio repellat deleniti facilis provident cupiditate blanditiis molestiae asperiores laudantium perspiciatis possimus quasi harum sequi ab voluptates.</p>
                    </Article>

                    <Article title="Dolor sit">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut consectetur iste, dignissimos quo magni!</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae maiores delectus dolor perferendis fugiat tenetur cupiditate, quod porro minima at, blanditiis odio esse quia molestias. Deleniti officiis exercitationem sit molestias nihil, magni rerum maxime amet.</p>
                    </Article>

                    <Article title="Loremamet consectetur">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quaerat totam laudantium, doloremque minus rem soluta ex molestiae pariatur esse cupiditate est ea quam temporibus ab officia facere tempore aspernatur tenetur, voluptatum deleniti iusto minima adipisci quidem harum modi. Nobis, voluptates!</p>
                    </Article>
                </Section>

                <HorizontalRule />
                
                <Section title="Projects">
                    <Article title="Current">
                        {
                            projects ? projects.map(project => (
                                <div key={ project.id }><ArrowLink to={ `/projects/${ project.id }` } text={ project.name } /></div>
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
                    { members.map(person => <div key={ person.id }><ArrowLink to={ `/people/${ person.id }` } text={ `${ person.name } ${ person.id === lead.id ? '(lead)' : '' }` } /></div>) }
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
            projects {
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