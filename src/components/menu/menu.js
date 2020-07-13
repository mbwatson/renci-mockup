import React, { useState } from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'gatsby'
import { IconButton } from '../buttons'
import { MagnifyingGlassIcon } from '../icons'
import { Tray } from './tray'

export const Navigation = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: stretch;
`

export const MenuLink = styled(Link)(({ theme, dark }) => `
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    text-decoration: none;
    transition: color 250ms, background-color 250ms;
    ${
        dark ? `
            color: ${ theme.color.white };
            background-color: transparent;
            &:hover {
                background-color: ${ theme.color.darkgrey };
            }
        ` : `
            color: ${ theme.color.black };
            background-color: transparent;
            &:hover {
                background-color: ${ theme.color.lightgrey };
            }
        `
    }
    &.active {
        color: ${ dark ? theme.color.white : theme.color.black };
        background-color: ${ dark ? theme.color.darkgrey : theme.color.lightgrey };
    }
`)

const MenuItem = styled.span``

const ToolsMenu = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: stretch;
`

export const Menu = ({ items, dark }) => {
    const theme = useTheme()
    const [trayOpen, setTrayOpen] = useState(false)

    const handleKeyDown = event => {
        if (event.keyCode === 27) {
            event.preventDefault()
            setTrayOpen(false)
        }
    }
    
    const handleOpenTray = () => {
        setTrayOpen(true)
        document.body.addEventListener('keydown', handleKeyDown)
    }
    const handleCloseTray = () => {
        setTrayOpen(false)
        document.body.removeEventListener('keydown', handleKeyDown)
    }

    return (
        <Navigation>
            {
                items.map((item, currentIndex) => item.submenu ? (
                    <MenuItem key={ item.path }
                        onClick={ handleCloseTray }
                        onMouseEnter={ handleOpenTray } onMouseLeave={ handleCloseTray }
                        onFocus={ handleOpenTray } onBlur={ handleCloseTray }
                    >
                        <MenuLink to={ item.path } dark={ dark } activeClassName="active">{ item.text }</MenuLink>
                        { trayOpen && <Tray onClick={ handleCloseTray }>{ React.createElement(item.submenu) }</Tray> }
                    </MenuItem>
                ) : (
                    <MenuItem key={ item.path }>
                        <MenuLink to={ item.path } dark={ dark } activeClassName="active">{ item.text }</MenuLink>
                    </MenuItem>
                ))
            }
            <ToolsMenu>
                <IconButton>
                    <MagnifyingGlassIcon size={ 24 } fill={ theme.color.grey } />
                </IconButton>
                <MenuLink to="#" dark={ dark }>Sign In</MenuLink>
            </ToolsMenu>
        </Navigation>
    )
}
