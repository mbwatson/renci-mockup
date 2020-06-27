import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'gatsby'
import { IconButton } from '../buttons'
import { MagnifyingGlassIcon } from '../icons'

export const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
`

export const MenuItem = styled(Link)(({ theme, dark }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    text-decoration: none;
    transition: color 250ms, background-color 250ms;
    ${
        dark ? `
            color: ${ theme.color.white };
            background-color: transparent;
            &:hover {
                background-color: ${ theme.color.darkgrey };
            }
        ` : `
            color: ${ theme.color.black };
            background-color: transparent;
            &:hover {
                background-color: ${ theme.color.lightgrey };
            }
        `
    }
    &.active {
        color: ${ dark ? theme.color.white : theme.color.black };
        background-color: ${ dark ? theme.color.darkgrey : theme.color.lightgrey };
    }
`)

const ToolsMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
`

export const Menu = ({ items, dark }) => {
    const theme = useTheme()

    return (
        <Navigation>
            { items.map(item => <MenuItem key={ item.text } to={ item.path } dark={ dark } activeClassName="active">{ item.text }</MenuItem>) }
            <ToolsMenu>
                <IconButton>
                    <MagnifyingGlassIcon size={ 24 } fill={ theme.color.grey } />
                </IconButton>
                <MenuItem to="#" dark={ dark }>Sign In</MenuItem>
            </ToolsMenu>
        </Navigation>
    )
}
