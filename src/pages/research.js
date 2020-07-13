import React from 'react'
import { SEO } from '../components/seo'
import { Container, Section, Article, HorizontalRule } from '../components/layout'
import { Title, Paragraph } from '../components/typography'

const ResearchPage = () => {
    return (
        <Container>
            <SEO title="Research at RENCI" />

            <Title>Research at RENCI</Title>

            <Paragraph>
                High-level view of research at RENCI.
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

                <Article title="More Stuff">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus quae eligendi consequatur nihil quaerat saepe dignissimos, quos impedit rem voluptatibus ducimus velit. Labore quidem est voluptate suscipit esse ipsa molestias, praesentium aspernatur. Rerum illo porro vel iure ab dolores culpa ratione est labore voluptas. Quasi natus recusandae nisi quidem ea laudantium, eaque dignissimos quo, excepturi facere nihil molestiae. Cum laboriosam nisi sunt nulla officiis assumenda cumque ex facilis accusamus consequatur mollitia praesentium animi, obcaecati odio commodi quam cupiditate asperiores quisquam alias hic nesciunt! Magni, delectus distinctio consectetur, ipsa possimus obcaecati.
                </Article>
            </Section>

        </Container>
    )
}

export default ResearchPage
