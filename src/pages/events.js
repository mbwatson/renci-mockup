import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Container} from '../components/layout'
import { Title } from '../components/typography'
import { Section } from '../components/section'
import { useEvents } from '../hooks'

const EventsPage = () => {
    const events = useEvents()

    return (
        <Container className="container">
            <SEO title="RENCI Events" />
            
            <Title>Events at RENCI</Title>
            
            {
                events.map(event => (
                    <div key={ event.id }>
                        <pre>{ JSON.stringify(event.frontmatter, null, 2) }</pre>
                    </div>
                ))
            }
            
        </Container>
    )
}

export default EventsPage
