import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

export const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: stretch;
    height: 100%;
`

export const MenuItem = styled(Link)(({ theme }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 5rem;
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
    return (
        <Navigation>
            { items.map(item => <MenuItem key={ item.text } to={ item.path }>{ item.text }</MenuItem>) }
        </Navigation>
    )
}
