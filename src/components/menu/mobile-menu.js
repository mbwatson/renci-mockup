import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

export const MobileNavigation = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
    padding-bottom: 1rem;
`

export const MobileMenuItem = styled(Link)(({ theme }) => `
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    color: ${ theme.color.primary.main };
    background-color: ${ theme.color.white };
    text-decoration: none;
    transition: background-color 250ms;
    &:hover {
        color: ${ theme.color.white };
        background-color: ${ theme.color.primary.main };
    }
`)

export const MobileMenu = ({ items }) => {
    return (
        <MobileNavigation>
            { items.map(item => <MobileMenuItem key={ item.text } to={ item.path }>{ item.text }</MobileMenuItem>) }
        </MobileNavigation>
    )
}
