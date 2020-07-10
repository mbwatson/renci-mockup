import React from "react"
import { SEO } from '../components/seo'
import { usePeople } from '../hooks'
import { Container, Section, HorizontalRule } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { StaffBrowser } from '../components/staff-browser'

const PeoplePage = () => {
    const staff = usePeople()

    return (
        <Container>
            <SEO title="RENCI Staff" />
            
            <Title>Our Team</Title>
            
            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                A, necessitatibus debitis sunt laboriosam, id vel molestias vero
                asperiores officiis impedit delectus eveniet dolores itaque est velit eos repellendus,
                esse veniam soluta doloribus voluptatum reiciendis.
                Excepturi hic corporis labore molestiae assumenda vitae nemo quas deleniti dolore aspernatur,
                maxime ipsam maiores iusto laborum consectetur culpa dolorum neque veniam repudiandae fuga inventore enim!
                Ratione enim explicabo odio minima possimus, laborum, quo voluptates harum sit magnam quos veniam voluptatem modi.
                Laborum accusantium voluptatem atque sint asperiores molestias quaerat voluptates.
                Laudantium reiciendis omnis explicabo voluptas, exercitationem error accusantium magnam,
                dolorum possimus nihil perferendis necessitatibus corrupti!
            </Paragraph>

            <HorizontalRule />

            <Section title="Office of the Director" fullWidth>
                Lorem ipsum dolor sit.
            </Section>

            <HorizontalRule />

            <Section title="Management Team" fullWidth>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, placeat voluptates vitae assumenda atque.
            </Section>

            <HorizontalRule />

            <Section title="Chief Scientists" fullWidth>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusantium exercitationem placeat architecto quas dolore!
            </Section>

            <HorizontalRule />

            <Section title="All Staff" fullWidth>
                <StaffBrowser staff={ staff } />
            </Section>

        </Container>
    )
}

export default PeoplePage
