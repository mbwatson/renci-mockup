import React, { createContext, useContext } from 'react'
import { useWindow } from '../hooks'

export const LayoutContext = createContext()

export const LayoutContextProvider = ({ children }) => {
    const { width, height } = useWindow()

    return (
        <LayoutContext.Provider value={{ width, height }}>
            { children }
        </LayoutContext.Provider>
    )
}

export const useLayoutContext = () => useContext(LayoutContext)
