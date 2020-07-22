import React, { Fragment } from "react"
import { SEO } from '../components/seo'
import { Container, Section, Hero } from '../components/layout'
import { useNewsSpotlight } from '../hooks'
import { Spotlight } from '../components/news'

const IndexPage = () => {
    const article = useNewsSpotlight()[0]

    return (
        <Fragment>
            <SEO title="Home" />

            <Hero backgroundColor="#000" />

            <Container>
                <Section title="News Spotlight" fullWidth>
                    <Spotlight key={ article.id } article={ article } />
                </Section>

                <Section title="Sit amet, consectetur">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ex sapiente excepturi blanditiis veniam debitis non ratione minus, sit quae. Quae ut reiciendis soluta eveniet corporis nisi obcaecati excepturi, accusantium!</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus labore, dolorem sunt mollitia voluptate illo quas minima porro voluptatum voluptates eos molestiae error cupiditate recusandae velit quisquam molestias est praesentium, quod necessitatibus consequuntur veritatis? Laborum cupiditate, repudiandae libero nobis dignissimos unde, modi qui totam rem impedit nam illum cumque.</p>
                </Section>
            </Container>
        </Fragment>
    )
}

export default IndexPage
