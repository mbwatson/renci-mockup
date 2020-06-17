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

export const MenuItem = styled(Link)(({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    color: ${ theme.color.primary.main };
    background-color: transparent;
    text-decoration: none;
    transition: color 250ms;
    &:hover {
        color: ${ theme.color.black };
    }
`)

const ToolsMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
`

export const Menu = ({ items }) => {
    const theme = useTheme()

    return (
        <Navigation>
            { items.map(item => <MenuItem key={ item.text } to={ item.path }>{ item.text }</MenuItem>) }
            <ToolsMenu>
                <IconButton>
                    <MagnifyingGlassIcon size={ 24 } fill={ theme.color.grey } />
                </IconButton>
                <MenuItem to="#">Sign In</MenuItem>
            </ToolsMenu>
        </Navigation>
    )
}
