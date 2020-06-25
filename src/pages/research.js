import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import { Container } from '../components/layout'
import { Title, Paragraph } from '../components/typography'
import { MiniProfile } from '../components/user'
import { Section } from '../components/section'
import { Article } from '../components/article'
import { HorizontalRule } from '../components/horizontal-rule'
import { useCollaborations, useGroups } from '../hooks'

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

            <Section title="Research Groups">
                {
                    groups.map((group, i) => (
                        <Fragment key={ group.id }>
                            <Article title={ group.name } titleLink={ `/groups/${ group.id }` }>
                                <div dangerouslySetInnerHTML={{ __html: group.description }} />
                            </Article>
                            { i < groups.length - 1 && <HorizontalRule /> }
                        </Fragment>
                    ))
                }
            </Section>
            
            <HorizontalRule />

            <Section title="Collaborations & Team Science">
                {
                    collaborations.map((group, i) => (
                        <Fragment key={ group.id }>
                            <Article title={ group.name }>
                                <div dangerouslySetInnerHTML={{ __html: group.description }} />
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
