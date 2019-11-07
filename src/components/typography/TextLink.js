import styled from 'styled-components'
import { Link } from 'gatsby'

export const TextLink = styled(Link)`
    background-color: transparent;
    -webkit-text-decoration-skip: objects;
    text-decoration: none;
    color: var(--color-sienna);
    position: relative;
    &::after {
        content: "";
        background-color: var(--color-sienna);
        position: absolute;
        left: 0;
        top: 100%;
        width: 100%;
        height: 1px;
        transform: scaleX(0);
        transform-origin: 50% 50%;
        transition: transform 250ms ease-out;
    }
    &:hover::after {
        transform: scale(1.0);
    }
`
