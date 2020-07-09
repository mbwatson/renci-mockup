import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Container, Section } from '../components/layout'
import { Hero } from '../components/hero'
import { Title, Paragraph } from '../components/typography'
import { HorizontalRule } from '../components/horizontal-rule'
import { useCareers } from '../hooks'
import { JobPosting } from '../components/careers'

const PublicationsPage = () => {
    const careers = useCareers()
    
    return (
        <Fragment>
            <SEO title="Careers" />

            <Hero>
                <Title>Careers</Title>

                <Paragraph>
                    RENCI's inclusive, creative ethod transcende disciplinary boundaries to catalyze data-driven discovery and innovation for the public good.
                    A career at RENCI offers a stimulating, collaborative environment where you can unleash your intellectual potential to advance technology and accelereate research.
                    We look forward to meeting you!
                </Paragraph>
            </Hero>

            <Container>
                

                <HorizontalRule />
                
                <Section title="Open Positions">
                    {
                        careers.map(posting => (
                            <JobPosting
                                key={ posting.id }
                                title={ posting.frontmatter.title }
                                publishDate={ posting.frontmatter.publish_date }
                                positionNumber={ posting.frontmatter.unc_position_number }
                                description={ posting.html }
                                url={ `http://unc.peopleadmin.com/postings/${ posting.frontmatter.unc_position_number }` }
                            />
                        ))
                    }
                </Section>

            </Container>
        </Fragment>
    )
}

export default PublicationsPage
