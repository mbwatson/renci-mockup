import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { AvatarIcon } from '../icons'

const ProfileWrapper = styled.div(({ theme }) => `
    & a {
        display: flex;
        & svg {
            fill: theme.color.primary.light;
            margin: 0 0.25rem;
            display: inline-block;
        }
    }
`)

export const MiniProfile = ({ person, lead }) => {
    return (
        <ProfileWrapper>
            <Link to={ `/people/${ person.id }` }><AvatarIcon size={ 24 } />{ person.name }{ lead && ' - LEAD' }</Link>
        </ProfileWrapper>   
    )
}
