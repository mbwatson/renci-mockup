import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AvatarIcon } from '../icons'
import { Container, Row, Col } from 'react-grid-system'
import { Card, CardHeader, CardBody, CardFooter } from '../card'
import { Heading } from '../typography'

const ProfileCard = styled(Card)`
    & svg {
        margin-right: 0.5rem;
    }
`

export const Profile = ({ person }) => {
    return (
        <ProfileCard>
            <CardHeader>
                <AvatarIcon />
                <Heading><Link to={ `/people/${ person.id }` }>{ person.name }</Link></Heading>
            </CardHeader>

            <CardBody>
                <Container>
                    <Row>
                        <Col xs={ 12 } sm={ 6 }>
                            <span>Teams ({ (person.teams && person.teams.length) || '0' })</span>
                            {
                                person.teams && person.teams.map(team => (
                                    <div key={ `${ person.id }-${ team.id }` }>
                                        <Link to={ `/teams/${ team.id }` }>{ team.name }</Link>
                                    </div>
                                ))
                            }
                        </Col>
                        <Col xs={ 12 } sm={ 6 }>
                            <span>Groups ({ (person.groups && person.groups.length) || '0' })</span>
                            {
                                person.groups && person.groups.map(group => (
                                    <div key={ `${ person.id }-${ group.id }` }>
                                        <Link to={ `/groups/${ group.id }` }>{ group.name }</Link>
                                    </div>
                                ))
                            }
                        </Col>
                    </Row>
                </Container>
            </CardBody>
            
        </ProfileCard>
    )
}
