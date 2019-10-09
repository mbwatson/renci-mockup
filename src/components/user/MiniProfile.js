import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AvatarIcon } from '../icons'

const ProfileWrapper = styled.div`
    & a {
        display: flex;
        & svg {
            margin: 0 0.25rem;
            display: inline-block;
        }
    }
`

export const MiniProfile = ({ person }) => {
    return (
        <ProfileWrapper>
            <Link to={ `/people/${ person.id }` }><AvatarIcon />{ person.name }</Link>
        </ProfileWrapper>   
    )
}
