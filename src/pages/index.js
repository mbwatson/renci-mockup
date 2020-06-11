import React, { Fragment } from "react"
import { SEO } from '../components/seo'
import { Hero } from '../components/hero'
import { Article } from '../components/article'
import { Section } from '../components/section'
import { HorizontalRule } from '../components/horizontal-rule'

const IndexPage = () => (
    <Fragment>
        <SEO title="Home" />

        <Hero />

        <Section title="Lorem ipsum dolor">
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
        
        <Section title="Sit amet, consectetur">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum ex sapiente excepturi blanditiis veniam debitis non ratione minus, sit quae. Quae ut reiciendis soluta eveniet corporis nisi obcaecati excepturi, accusantium!</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime ducimus labore, dolorem sunt mollitia voluptate illo quas minima porro voluptatum voluptates eos molestiae error cupiditate recusandae velit quisquam molestias est praesentium, quod necessitatibus consequuntur veritatis? Laborum cupiditate, repudiandae libero nobis dignissimos unde, modi qui totam rem impedit nam illum cumque.</p>
        </Section>
        
    </Fragment>
)

export default IndexPage
