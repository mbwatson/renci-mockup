import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from "../components/layout"
import { MiniProfile } from '../components/user'

export default ({ data, pageContext }) => {
    const { groupsYaml: {
        name,
        members,
        projects,
    }} = data
    return (
        <Layout>
            <h1>{ name }</h1>

            <h3>Members</h3>
            <div>
                { members.map(person => <MiniProfile key={ person.id } person={ person } />) }
            </div>

            <br/>

            <h3>Projects</h3>
            <div>
                {
                    projects
                    ? projects.map(project => (
                        <div><Link to={ `/projects/${ project.id }` }>{ project.name }</Link></div>
                    ))
                    : <div>&empty;</div>
                }
            </div>

            <br/>
        </Layout>
    )
}

export const groupQuery = graphql`
    query($id: String!) {
        groupsYaml( id: { eq: $id }) {
            name
            members {
                id
                name
            }
            projects {
                id
                name
            }
        }
    }
`