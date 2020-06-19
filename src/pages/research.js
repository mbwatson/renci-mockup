import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import { MiniProfile } from '../components/user'
import { Section } from '../components/section'
import { Article } from '../components/article'
import { HorizontalRule } from '../components/horizontal-rule'
import { useCollaborations, useGroups } from '../hooks'

const ResearchPage = () => {
    const groups = useGroups()
    const collaborations = useCollaborations()

    return (
        <Fragment>
            <SEO title="RENCI Groups" />


            
            <Section title="Research Groups">
                {
                    groups.map((group, i) => (
                        <Fragment>
                            <Article key={ group.id } title={ group.name } titleLink={ `/groups/${ group.id }` }>
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
                        <Fragment>
                            <Article key={ group.id } title={ group.name }>
                                <div dangerouslySetInnerHTML={{ __html: group.description }} />
                            </Article>
                            { i < collaborations.length - 1 && <HorizontalRule /> }
                        </Fragment>
                    ))
                }
            </Section>

        </Fragment>
    )
}

export default ResearchPage
