import React, { useEffect, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { animated, useTransition } from 'react-spring'

const Tip = styled(animated.div)(({ theme, width, placement }) => `
    position: absolute;
    left: calc(50%);
    top: 100%;
    background-color: ${ theme.color.black };
    color: ${ theme.color.white };
    padding: ${ theme.spacing.extraSmall };
    text-align: center;
    font-size: 90%;
    min-width: ${ width };
    max-width: 200px;
    opacity: 0.9;
    transform: translateX(-50%);
    ${
        placement === 'bottom' ? `
            padding-top: ${ theme.spacing.small };
            clip-path: polygon(0% 0.25rem, calc(50% - 0.25rem) 0.25rem, 50% 0%, calc(50% + 0.25rem) 0.25rem, 100% 0.25rem, 100% 100%, 0% 100%);
        ` : ''
    }
    ${
        placement === 'top' ? `
            padding-bottom: ${ theme.spacing.small };
            clip-path: polygon(0% 0%, 100% 0%, 100% calc(100% - 0.25rem), calc(50% - 0.25rem) calc(100% - 0.25rem), 50% 100%, calc(50% + 0.25rem) calc(100% - 0.25rem), 0% calc(100% - 0.25rem));
        ` : ''
    }
`)

const Wrapper = styled.span`
    position: relative;
`

export const Tooltip = ({ tip, placement, children }) => {
    const wrapperRef = useRef()
    const tipRef = useRef()
    const [active, setActive] = useState(false)
    const [stringPixelWidth, setStringPixelWidth] = useState(0)
    const sign = placement === 'bottom' ? '+' : '-'
    const transitions = useTransition(active, null, {
        from: { opacity: 0, top: `${ sign }150%` },
        enter: { opacity: 0.9, top: `${ sign }110%` },
        leave: { opacity: 0, top: `${ sign }150%` },
    })

    useEffect(() => {
        setStringPixelWidth(tip.length * 16)
    }, [tip])

    const handleShowTooltip = event => setActive(true)
    const handleHideTooltip = event => setActive(false)

    return (
        <Wrapper
            ref={ wrapperRef }
            onMouseEnter={ handleShowTooltip }
            onMouseLeave={ handleHideTooltip }
            onFocus={ handleShowTooltip }
            onBlur={ handleHideTooltip }
        >
            { children }
            { transitions.map(({ item, key, props }) => item && <Tip key={ key } ref={ tipRef } placement={ placement } style={ props } width={ `${ stringPixelWidth }px` }>{ tip }</Tip>) }
        </Wrapper>
    )
}

Tooltip.propTypes = {
    tip: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    placement: PropTypes.oneOf(['top', 'bottom']),
}

Tooltip.defaultProps = {
    placement: 'bottom',
}
