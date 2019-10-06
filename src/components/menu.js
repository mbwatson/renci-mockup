import styled from 'styled-components'
import { Link } from "gatsby"

export const Menu = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`

export const MenuItem = styled(Link)`
    padding: 0 1rem;
    color: #fff;
    text-decoration: none;
    &:hover {
        color: red;
    }
`