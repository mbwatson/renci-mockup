import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AvatarIcon } from '../icons'
import { Container, Row, Col } from 'react-grid-system'

const ProfileWrapper = styled.div`
    border: 1px solid #eee;
    box-shadow: 0 0 10px 1px rgba(0, 0, 0, 0.05);
    margin-bottom: 2rem;
    & svg {
        margin-right: 0.5rem;
    }
`

const ProfileHeader = styled.header`
    padding: 1rem 1rem 0 1rem;
    display: flex;
    border-bottom: 1px solid #eee;
`

const ProfileBody = styled.main`
    padding: 1rem;
`

// const ProfileFooter = styled.footer`
//     border-top: 1px solid #eee;
//     padding: 1rem;
// `

export const Profile = ({ person }) => {
    return (
        <ProfileWrapper>
            <ProfileHeader>
                <AvatarIcon />
                <h3><Link to={ `/people/${ person.id }` }>{ person.name }</Link></h3>
            </ProfileHeader>

            <ProfileBody>
                <Container>
                    <Row>
                        <Col xs={ 12 } sm={ 6 }>
                            <h4>Teams ({ (person.teams && person.teams.length) || '0' })</h4>
                            {
                                person.teams && person.teams.map(team => (
                                    <div key={ `${ person.id }-${ team.id }` }>
                                        <Link to={ `/teams/${ team.id }` }>{ team.name }</Link>
                                    </div>
                                ))
                            }
                        </Col>
                        <Col xs={ 12 } sm={ 6 }>
                            <h4>Groups ({ (person.groups && person.groups.length) || '0' })</h4>
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
            </ProfileBody>
            
        </ProfileWrapper>   
    )
}
