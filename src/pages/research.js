import React from 'react'
import { SEO } from '../components/seo'
import { Container, Section, Article, HorizontalRule } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { ArrowLink } from '../components/link'
import { useGroups } from '../hooks'

const ResearchPage = () => {
    const groups = useGroups()

    return (
        <Container>
            <SEO title="Research at RENCI" />

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

            <HorizontalRule />
            
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
            
            <HorizontalRule />
            
            <Section title="In Depth">
                <Article title="Some Stuff">
                    More in-the-weeds stuff about research at RENCI.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus eius velit mollitia aut, quo laborum totam voluptatibus inventore delectus, voluptatem accusamus labore, sint nesciunt ut ipsa enim repellat neque pariatur quaerat quibusdam autem eum ea vero doloremque. Dolorem dicta, ipsam.
                </Article>

                <Article title="Research Groups">
                    {
                        groups.map(group => (
                            <div key={ group.id }><ArrowLink to={ group.fields.path } text={ group.name } /></div>
                        ))
                    }
                </Article>
            </Section>

        </Container>
    )
}

export default ResearchPage
