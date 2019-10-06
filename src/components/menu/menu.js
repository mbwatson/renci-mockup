import styled from 'styled-components'
import { Link } from "gatsby"

export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    height: 100%;
`

export const MenuItem = styled(Link)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    color: #fff;
    background-color: transparent;
    text-decoration: none;
    transition: background-color 250ms;
    &:hover {
        color: #ccc;
        background-color: #333;
    }
`