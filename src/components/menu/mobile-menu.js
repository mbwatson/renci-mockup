import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from "gatsby"
import { CloseIcon, HamburgerIcon } from '../icons'

const Toggler = styled.button`
    cursor: pointer;
    background-color: transparent;
    border: 0;
    z-index: 3;
    margin-right: 1rem;
`

export const MobileMenu = ({ items }) => {
    const theme = useTheme()
    const [visible, setVisible] = useState(false)

    const handleToggleMenu = () => setVisible(!visible)
    const handleCloseMenu = () => setVisible(false)

    return (
        <Toggler onClick={ handleToggleMenu }>
            { visible ? <CloseIcon size="36" fill={ theme.color.danger } /> : <HamburgerIcon size="36" fill={ theme.color.renciBlue } /> }
        </Toggler>
    )
}
