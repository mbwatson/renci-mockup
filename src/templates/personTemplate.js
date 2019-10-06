import React from 'react'
import { graphql, Link } from 'gatsby'
import { Layout } from "../components/layout"

export default ({ data, pageContext }) => {
    const { peopleYaml: { name, title, email, office, groups, teams, }} = data

    return (
        <Layout>
            <h1>{ name }</h1>
            <h2>{ title }</h2>

            <h3>Contact</h3>
            <div>
                email: { email } <br/>
                office: { office.location } <br/>
                phone: { office.phone } <br/>
            </div>

            <br/>

            <h3>Groups</h3>
            <div>
                {
                    groups && groups.map(group => (
                        <div>
                            <Link to={ `/groups/${ group.id }` }>{ group.name }</Link>
                        </div>
                    ))
                }
            </div>

            <br/>

            <h3>Teams</h3>
            <div>
                {
                    teams && teams.map(team => (
                        <div>
                            <Link to={ `/teams/${ team.id }` }>{ team.name }</Link>
                        </div>
                    ))
                }
            </div>
        </Layout>
    )
}

export const personQuery = graphql`
    query($id: String!) {
        peopleYaml( id: { eq: $id }) {
            id
            name
            email
            title
            office {
                location
                phone
            }
            online_presence {
                twitter
                github
                url
            }
            bio
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
`