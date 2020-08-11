import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Container, Section, Hero, Article } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { ArrowLink } from '../components/link'
import { useProjects } from '../hooks'

const ResearchPage = () => {
    const projects = useProjects()

    return (
        <Fragment>
            <SEO title="Research at RENCI" />

            <Hero>
                <Title>Research at RENCI</Title>
                <Paragraph>
                    High-level view of research at RENCI.
                    While this should still list out specific research efforts at RENCI,
                    perhaps this is a good way to expose information around how, why, etc research is done at RENCI.
                </Paragraph>

                <Paragraph>
                    Libero aperiam, adipisci cum natus eaque officiis consequatur, laboriosam?
                    Alias fugiat similique officiis eaque minima, vitae atque! Iure nemo,
                    nesciunt cum possimus nulla aut tenetur!
                </Paragraph>
            </Hero>

            <Container>
                <Section title="Overview">
                    <Article title="A thing">
                        More in-the-weeds stuff about research at RENCI.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, accusamus! Exercitationem sequi at hic explicabo facilis minus recusandae et. Perspiciatis sapiente maiores natus in mollitia reiciendis excepturi eius corporis officia.
                    </Article>

                    <Article title="Another thing">
                        More in-the-weeds stuff about research at RENCI.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, accusamus! Exercitationem sequi at hic explicabo facilis minus recusandae et. Perspiciatis sapiente maiores natus in mollitia reiciendis excepturi eius corporis officia.
                    </Article>
                </Section>
                
                <Section title="In Depth">
                    <Article title="Some Stuff">
                        <Paragraph>
                            More in-the-weeds stuff about research at RENCI and its research efforts.
                        </Paragraph>
                        <Paragraph>
                            We do research internally and partner with outside insitutions&mdash;team science!
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eius velit mollitia aut, quo laborum totam voluptatibus inventore delectus, voluptatem accusamus labore, sint nesciunt ut ipsa enim repellat neque pariatur quaerat quibusdam autem eum ea vero doloremque. Dolorem dicta, ipsam.
                        </Paragraph>
                    </Article>

                    <Article title="Projects">
                        <Paragraph>
                            {
                                projects.map(project => (
                                    <Fragment key={ project.id }>
                                        <ArrowLink to={ project.fields.path } text={ project.name } /> <br/>
                                    </Fragment>
                                ))
                            }
                        </Paragraph>
                    </Article>

                </Section>

            </Container>
        </Fragment>
    )
}

export default ResearchPage
