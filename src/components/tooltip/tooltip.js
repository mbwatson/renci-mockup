import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { useWindow } from '../../hooks'

const Tip = styled.div(({ theme, width, offsetX, offsetY }) => `
    position: absolute;
    left: calc(50% + ${ offsetX });
    top: 100%;
    background-color: ${ theme.color.black };
    color: ${ theme.color.white };
    padding:  ${ theme.spacing.extraSmall };
    // clip-path: polygon(0% 0.5rem, calc(50% - 0.5rem) 0.5rem, 50% 0%, calc(50% + 0.5rem) 0.5rem, 100% 0.5rem, 100% 100%, 0% 100%);
    text-align: center;
    font-size: 90%;
    min-width: ${ width };
    max-width: 200px;
    opacity: 0.0;
    transform-origin: center center;
    transform: translate(-50%, ${ theme.spacing.extraSmall }) scale(0);
    transition: opacity 500ms 250ms ease-out, transform 250ms 250ms ease-out;
`)

const Wrapper = styled.span`
    position: relative;
    &:hover ${ Tip } {
        opacity: 0.9;
        transform: translate(-50%, 0) scale(1.0);
        transition: opacity 500ms, transform 250ms;
    }
`

export const Tooltip = ({ tip, children }) => {
    const { windowWidth } = useWindow()
    const tipRef = useRef()
    const [stringPixelWidth, setStringPixelWidth] = useState(0)
    const [offsetX, setOffsetX] = useState(0)

    useEffect(() => {
        setStringPixelWidth(tip.length * 10)
    }, [tip])

    return (
        <Wrapper>
            { children }
            <Tip ref={ tipRef } width={ `${ stringPixelWidth }px` } offsetX={ `${ offsetX }px` } offsetY={ `0px` }>{ tip }</Tip>
        </Wrapper>
    )
}

Tooltip.propTypes = {
    tip: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}
