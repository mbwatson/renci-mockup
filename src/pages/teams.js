import React, { Fragment } from 'react'
import { SEO } from '../components/seo'
import { Link } from 'gatsby'
import { MiniProfile } from '../components/people'
import { Card, CardHeader, CardBody } from '../components/card'
import { Heading, Subheading } from '../components/typography'
import { useTeams } from '../hooks'

const TeamsPage = () => {
    const teams = useTeams()

    return (
        <Fragment>
            <SEO title="RENCI Teams" />
            
            <h1>Teams</h1>

            {
                teams.map(team => (
                    <Card key={ team.id }>
                        <CardHeader>
                            <Heading><Link to={ `/teams/${ team.id }` }>{ team.name }</Link></Heading>
                        </CardHeader>

                        <CardBody>
                            <Subheading>Members</Subheading>
                            {
                                team.members && team.members.map(person => (
                                    <MiniProfile key={ `${ team.id }-${ person.id }` } person={ person } />
                                ))
                            }
                        </CardBody>
                        
                    </Card>
                ))
            }

        </Fragment>
    )
}

export default TeamsPage
