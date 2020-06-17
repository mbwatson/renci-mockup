import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { SEO } from '../components/seo'
import { MiniProfile } from '../components/user'
import { Section } from '../components/section'
import { HorizontalRule } from '../components/horizontal-rule'
import { Article } from '../components/article'
import { useGroups } from '../hooks'

const ResearchPage = () => {
    const groups = useGroups()
    console.log(groups)

    return (
        <Fragment>
            <SEO title="RENCI Groups" />
            
            <h1>Research Groups</h1>

            {
                groups.map((group, i) => (
                    <Fragment>
                        <Section key={ group.id } title={ group.name }>
                            <Article title="Members">
                                {
                                    group.members && group.members.map(person => (
                                        <MiniProfile key={ `${ group.id }-${ person.id }` } person={ person } />
                                    ))
                                }
                            </Article>
                            <Article title="Projects">
                                {
                                    group.projects && group.projects.map(project => (
                                        <div key={ `${ group.id }-${ project.id }` }>
                                            <Link to={ `/projects/${ project.id }` }>{ project.name }</Link>
                                        </div>
                                    ))
                                }
                            </Article>
                        </Section>
                        { i < groups.length - 1 && <HorizontalRule /> }
                    </Fragment>
                ))
            }

        </Fragment>
    )
}

export default ResearchPage
