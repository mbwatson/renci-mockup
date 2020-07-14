import React, { Fragment, useEffect, useState } from 'react'
import styled, { css, keyframes, useTheme } from 'styled-components'
import { Link } from 'gatsby'
import { CloseIcon, HamburgerIcon } from '../icons'
import { Toggler } from './toggler'

const reveal = keyframes`
    0% { display: none; opacity: 0; }
    1% { display: block; opacity: 0.0; }
    100% { display: block; opacity: 1.0; }
`

const hide = keyframes`
    0%, 20% { display: block; opacity: 1.0; }
    21% { display: block; opacity: 1.0; }
    100% { display: none; opacity: 0.0; }
`

const Overlay = styled.div(({ theme }) => css`
    background-color: ${ theme.color.black }f9;
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100vh;
    z-index: 1;
    animation: 250ms ${ reveal };
`)

const NavWrapper = styled.nav(({ theme }) => `
    // border: 1px solid #f99;
    height: 100%;
    width: 100%;
    padding: calc(4 * ${ theme.spacing.large }) ${ theme.spacing.large } ${ theme.spacing.large } ${ theme.spacing.large };
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: stretch;
`)

const MenuLink = styled(Link)(({ theme }) => `
    // border: 1px solid #f99;
    font-size: 200%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    max-height: 100px;
    padding: 0 1rem;
    text-decoration: none;
    transition: color 250ms, background-color 250ms;
    color: ${ theme.color.whitish };
    &:hover {
        color: ${ theme.color.renciBlue };
    }
`)

export const MobileMenu = ({ items }) => {
    const theme = useTheme()
    const [visible, setVisible] = useState(false)

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
                visible && (
                    <Overlay>
                        <NavWrapper>
                            {
                                items.map(item => (
                                    <MenuLink key={ item.text } to={ item.path } onClick={ handleCloseMenu }>{ item.text }</MenuLink>
                                ))
                            }
                        </NavWrapper>
                    </Overlay>
                )
            }
        </Fragment>
    )
}
