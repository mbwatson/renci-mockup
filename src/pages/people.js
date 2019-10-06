import React from "react"
import { graphql, Link } from 'gatsby'
import { SEO } from "../components/seo"
import { Layout } from "../components/layout"

const PeoplePage = ({ data }) => {
    const staff = data.allPeopleYaml.edges

    return (
        <Layout>
            <SEO title="RENCI Staff" />
            
            <h1>Staff</h1>

            {
                staff.map(({ node: person }) => (
                    <div key={ person.id }>
                        <h2>{ person.name }</h2>

                        <h4>- Teams ({ (person.teams && person.teams.length) || '0' })</h4>
                        {
                            person.teams && person.teams.map(team => (
                                <div key={ `${ person.id }-${ team.id }` }>
                                    <Link to={ `/teams/${ team.id }` }>{ team.name }</Link>
                                </div>
                            ))
                        }
                        <br/>

                        <h4>- Groups ({ (person.groups && person.groups.length) || '0' })</h4>
                        {
                            person.groups && person.groups.map(group => (
                                <div key={ `${ person.id }-${ group.id }` }>
                                    <Link to={ `/groups/${ group.id }` }>{ group.name }</Link>
                                </div>
                            ))
                        }
                        <br/>
                        
                    </div>
                ))
            }

        </Layout>
    )
}

export const query = graphql`
    query {
        allPeopleYaml {
            edges {
                node {
                    id
                    name
                    teams {
                        id
                        name
                    }
                    groups {
                        id
                        name
                    }
                }
            }
        }
    }
`

export default PeoplePage
