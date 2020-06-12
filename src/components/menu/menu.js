import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'gatsby'
import { IconButton } from '../buttons'
import { MagnifyingGlassIcon } from '../icons'

export const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
`

export const MenuItem = styled(Link)(({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    color: ${ theme.color.primary.main };
    background-color: transparent;
    text-decoration: none;
    transition: background-color 250ms;
    &:hover {
        color: ${ theme.color.white };
        background-color: ${ theme.color.primary.main };
    }
`)

export const Menu = ({ items }) => {
    const theme = useTheme()
    return (
        <Navigation>
            { items.map(item => <MenuItem key={ item.text } to={ item.path }>{ item.text }</MenuItem>) }
            <IconButton><MagnifyingGlassIcon size={ 24 } fill={ theme.color.grey } /></IconButton>
            <div>|</div>
            <MenuItem to="#">Sign In</MenuItem>
        </Navigation>
    )
}
