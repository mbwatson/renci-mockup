import React, { Fragment } from 'react'
import { graphql, Link } from 'gatsby'
import { LinkIcon, TwitterIcon, GitHubIcon } from '../components/icons'

export default ({ data, pageContext }) => {
    const { peopleYaml: { name, title, email, office, groups, teams, collaborations, online_presence }} = data

    return (
        <Fragment>
            <h1>{ name }</h1>
            <h2>{ title }</h2>
            { online_presence.url && <Fragment><LinkIcon /> <a href={ online_presence.url }>{ online_presence.url }</a></Fragment> }
            { online_presence.twitter && <Fragment><TwitterIcon /> <a href={ `https://twitter.com/${ online_presence.twitter }` }>{ online_presence.twitter }</a></Fragment> }
            { online_presence.github && <Fragment><GitHubIcon /> <a href={ `https://github.com/${ online_presence.github }` }>{ online_presence.github }</a></Fragment> }


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
                    groups
                    ? groups.map(group => (
                        <div>
                            <Link to={ `/groups/${ group.id }` }>{ group.name }</Link>
                        </div>
                    ))
                    : <div>&empty;</div>
                }
            </div>

            <br/>

            <h3>Collaborations</h3>
            <div>
                {
                    collaborations
                    ? collaborations.map(collaboration => (
                        <div>
                            <Link to={ `/collaborations/${ collaboration.id }` }>{ collaboration.name }</Link>
                        </div>
                    ))
                    :  <div>&empty;</div>
                }
            </div>

            <br/>

            <h3>Teams</h3>
            <div>
                {
                    teams
                    ? teams.map(team => (
                        <div>
                            <Link to={ `/teams/${ team.id }` }>{ team.name }</Link>
                        </div>
                    ))
                    :  <div>&empty;</div>
                }
            </div>

        </Fragment>
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
                twitter_username
                github_username
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
            collaborations {
                id
                name
            }
        }
    }
`