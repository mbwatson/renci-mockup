import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from "../components/layout"
import { LinkIcon, TwitterIcon, GitHubIcon } from '../components/icons'

export default ({ data, pageContext }) => {
    const { projectsYaml: {
        name,
        description,
        group,
        online_presence
    }} = data
    
    return (
        <Layout>
            <h1>{ name }</h1>
            
            <ul style={{ listStyleType: 'none' }}>
                <li><LinkIcon /> <a href={ online_presence.url }>{ online_presence.url }</a></li>
                <li><TwitterIcon /> <a href={ `https://twitter.com/${ online_presence.twitter }` }>{ online_presence.twitter }</a></li>
                <li><GitHubIcon /> <a href={ `https://github.com/${ online_presence.github }` }>{ online_presence.github }</a></li>
            </ul>

            <p>{ description }</p>

            <p>This project is owned by <Link to={ `/groups/${ group.id }` }>{ group.name }</Link> </p>
        </Layout>
    )
}

export const projectQuery = graphql`
    query($id: String!) {
        projectsYaml( id: { eq: $id }) {
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