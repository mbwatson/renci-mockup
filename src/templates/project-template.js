import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import { DefaultLayout } from '../components/layout'
import { SocialLinks } from '../components/social-links'

export default ({ data, pageContext }) => {
    console.log(pageContext)
    const { projectsYaml: {
        id,
        name,
        description,
        group,
        online_presence
    }} = data
    
    return (
        <Fragment>
            <h1>{ name }</h1>
            
            <SocialLinks url={ online_presence.url } twitter={ online_presence.twitter } github={ online_presence.github } />

            <p>{ description }</p>

            <p>
                This project is owned by <Link to={ `/groups/${ group.id }` }>{ group.name }</Link>
            </p>
        </Fragment>
    )
}

export const projectQuery = graphql`
    query($id: String!) {
        projectsYaml( id: { eq: $id }) {
            id
            name
            description
            group {
                id
                name
            }
            online_presence {
                url
                twitter
                github
            }
        }
    }
`