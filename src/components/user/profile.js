import React from 'react'
import styled from 'styled-components'
import { AvatarIcon } from '../icons'
import { Container, Row, Col } from 'react-grid-system'
import { Card, CardHeader, CardBody } from '../card'
import { Heading, TextLink } from '../typography'

const ProfileCard = styled(Card)`
    transition: transform 250ms;
    &:hover {
        transform: translateY(-0.1rem);
    }
    & svg {
        margin-right: 0.5rem;
    }
`

export const Profile = ({ person }) => {
    return (
        <ProfileCard>
            <CardHeader>
                <AvatarIcon />
                <Heading><TextLink to={ `/people/${ person.id }` }>{ person.name }</TextLink></Heading>
            </CardHeader>

            <CardBody>
                <Container>
                    <Row>
                        <Col xs={ 12 } sm={ 4 }>
                            <span>Teams ({ (person.teams && person.teams.length) || '0' })</span>
                            {
                                person.teams && person.teams.map(team => (
                                    <div key={ `${ person.id }-${ team.id }` }>
                                        <TextLink to={ `/teams/${ team.id }` }>{ team.name }</TextLink>
                                    </div>
                                ))
                            }
                        </Col>
                        <Col xs={ 12 } sm={ 4 }>
                            <span>Groups ({ (person.groups && person.groups.length) || '0' })</span>
                            {
                                person.groups && person.groups.map(group => (
                                    <div key={ `${ person.id }-${ group.id }` }>
                                        <TextLink to={ `/groups/${ group.id }` }>{ group.name }</TextLink>
                                    </div>
                                ))
                            }
                        </Col>
                        <Col xs={ 12 } sm={ 4 }>
                            <span>Collaborations ({ (person.collaborations && person.collaborations.length) || '0' })</span>
                            {
                                person.collaborations && person.collaborations.map(collaboration => (
                                    <div key={ `${ person.id }-${ collaboration.id }` }>
                                        <TextLink to={ `/collaborations/${ collaboration.id }` }>{ collaboration.name }</TextLink>
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
