import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'gatsby'
import { ArrowRightIcon } from '../icons'

const Wrapper = styled(Link)(({ theme, float }) => `
    display: inline-flex;
    align-items: center;
    float: ${ float ? float : 'none' };
    & .arrow-right {
        fill: ${ theme.color.darkgrey };
        margin-left: 0.1rem;
        transition: transform 100ms, opacity 250ms;
        transform: translateX(0rem);
        opacity: 0.75;
    }
    &:hover {
        & .arrow-right {
            transform: translateX(0.1rem);
            opacity: 1.0;
        }
    }
`)

export const ArrowLink = ({ text, ...props }) => {
    const theme = useTheme()
    return (
        <Wrapper { ...props }>
            { text } <ArrowRightIcon class="arrow-right"size={ 14 } />
        </Wrapper>
    )
}
