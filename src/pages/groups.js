import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"
import { MiniProfile } from '../components/user'

const PeoplePage = ({ data }) => {
    const groups = data.allGroupsYaml.edges

    return (
        <Layout>
            <SEO title="RENCI Groups" />
            
            <h1>Groups</h1>

            {
                groups.map(({ node: group }) => (
                    <div key={ group.id }>
                        <h2>{ group.name }</h2>
                        
                        <h4>Members</h4>
                        <div>
                            { group.members && group.members.map(person => <MiniProfile key={ person.id } person={ person } />) }
                        </div>

                        <br/>

                        <h4>Projects</h4>
                        <div>
                            {
                                group.projects && group.projects.map(project => (
                                    <div key={ `${ group.id }-${ project.id }` }>
                                        <Link to={ `/projects/${ project.id }` }>{ project.name }</Link>
                                    </div>
                                ))
                            }
                        </div>
                        
                        <br/>

                    </div>
                ))
            }

        </Layout>
    )
}

export const query = graphql`
    query {
        allGroupsYaml {
            edges {
                node {
                    id
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
        }
    }
`

export default PeoplePage
