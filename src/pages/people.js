import React, { Fragment } from "react"
import { SEO } from '../components/seo'
import { usePeople } from '../hooks'
import { Container} from '../components/layout'
import { HorizontalRule } from '../components/horizontal-rule'
import { Section } from '../components/section'
import { Profile } from '../components/user'
import { StaffBrowser } from '../components/staff-browser'
import { Title } from '../components/typography'

const PeoplePage = () => {
    const staff = usePeople()

    return (
        <Container>
            <SEO title="RENCI Staff" />
            
            <Title>Our Team</Title>
            
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
