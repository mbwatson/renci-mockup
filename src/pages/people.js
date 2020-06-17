import React, { Fragment } from "react"
import { SEO } from '../components/seo'
import { usePeople } from '../hooks'
import { Section } from '../components/section'
import { Profile } from '../components/user'
import { StaffBrowser } from '../components/staff-browser'

const PeoplePage = () => {
    const staff = usePeople()

    return (
        <Fragment>
            <SEO title="RENCI Staff" />
            
            <h1>Our Team</h1>
            
            <Section title="Office of the Director">
                Lorem ipsum dolor sit.
            </Section>

            <Section title="Management Team">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis, placeat voluptates vitae assumenda atque.
            </Section>

            <Section title="Chief Scientists">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos accusantium exercitationem placeat architecto quas dolore!
            </Section>

            <Section title="All Staff">
                <StaffBrowser staff={ staff } />
            </Section>

        </Fragment>
    )
}

export default PeoplePage
