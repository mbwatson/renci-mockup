import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import { DefaultLayout } from '../components/layout'
import { SocialLinks } from '../components/social-links'

export default ({ data, pageContext }) => {
    const { projectsYaml: {
        id,
        name,
        description,
        online_presence
    }} = data
    
    return (
        <Fragment>
            <h1>{ name }</h1>
            
            <SocialLinks url={ online_presence.url } twitter={ online_presence.twitter } github={ online_presence.github } />

            <p>{ description }</p>

            <p>
                This project is owned by some group
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
            online_presence {
                url
                twitter
                github
            }
        }
    }
`