import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { Toggler } from './toggler'
import { animated, useTransition } from 'react-spring'

const Overlay = styled(animated.div)(({ theme }) => `
    background-color: ${ theme.color.white };
    position: fixed;
    left: 0;
    top: 0;
    height: 100%;
    width: calc(100% - 5.75rem);
    height: 100vh;
    z-index: 1;
    border-right: 1px solid ${ theme.color.darkgrey };
`)

const Navigation = styled.nav(({ theme }) => `
    height: 100%;
    width: 100%;
    padding-top: calc(3 * ${ theme.spacing.large });
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
`)

const MenuLink = styled(Link)(({ theme }) => `
    font-size: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 4rem;
    font-weight: 300;
    padding: 0 ${ theme.spacing.extraLarge };
    text-decoration: none;
    transition: color 250ms, background-color 250ms;
    color: ${ theme.color.black };
    &:hover {
        color: ${ theme.color.renciBlue };
        background-color: ${ theme.color.whitish };
    }
`)

export const MobileMenu = ({ items }) => {
    const [visible, setVisible] = useState(false)
    const transitions = useTransition(visible, null, {
        config: { mass: 1, tension: 100, friction: 10, clamp: true },
        from: { opacity: 0.5, transform: 'translateX(-100%)' },
        enter: { opacity: 1, transform: 'translateX(0%)' },
        leave: { opacity: 0, transform: 'translateX(-100%)' },
    })

    const handleToggleMenu = () => setVisible(!visible)
    const handleCloseMenu = () => setVisible(false)

    useEffect(() => {
        const escapeHatch = event => {
            if (event.keyCode === 27) { // escaoe
                handleCloseMenu()
            }
        }
        if (visible) {
            document.addEventListener('keydown', escapeHatch)
        //     document.body.style.overflow = 'hidden'
        // } else {
        //     document.body.style.overflow = 'auto'
        }
        return () => document.removeEventListener('keydown', escapeHatch)
    }, [visible])

    return (
        <Fragment>
            <Toggler onClick={ handleToggleMenu } active={ visible } />
            {
                transitions.map(({ item, key, props }) => item && 
                    <Overlay style={ props }>
                        <Navigation>
                            {
                                items.map(item => (
                                    <MenuLink key={ item.text } to={ item.path } onClick={ handleCloseMenu }>{ item.text }</MenuLink>
                                ))
                            }
                        </Navigation>
                    </Overlay>
                )
            }
        </Fragment>
    )
}
