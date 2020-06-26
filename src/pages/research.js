import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Container } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { Section } from '../components/section'
import { Article } from '../components/article'
import { HorizontalRule } from '../components/horizontal-rule'
import { useCollaborations, useGroups } from '../hooks'
import { ArrowLink } from '../components/link'

const ResearchPage = () => {
    const groups = useGroups()
    const collaborations = useCollaborations()

    return (
        <Container>
            <SEO title="RENCI Groups" />
            
            <Title>Research at RENCI</Title>

            <Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas rerum quos, ab dolore eius culpa id excepturi magni fuga saepe sunt non, ea dolores nisi tempore eos. Explicabo, eligendi, ut.
            </Paragraph>
            
            <HorizontalRule />

            {
                groups.map((group, i) => (
                    <Fragment key={ group.id }>
                        <ArrowLink to={ `/groups/${ group.id }` } text={ group.name } />
                    </Fragment>
                ))
            }
            
            <HorizontalRule />

            <Section title="Collaborations & Team Science">
                {
                    collaborations.map((collaboration, i) => (
                        <Fragment key={ collaboration.id }>
                            <Article title={ collaboration.name } titleLink={ `/groups/${ collaboration.id }` }>
                                <div dangerouslySetInnerHTML={{ __html: collaboration.description }} />
                            </Article>
                            { i < collaborations.length - 1 && <HorizontalRule /> }
                        </Fragment>
                    ))
                }
            </Section>

        </Container>
    )
}

export default ResearchPage
