import { useState, useEffect } from 'react'

export const useWindow = () => {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerheight)
    
    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth)
            setWindowHeight(window.innerHeight)
        }
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('resize', handleResize)
        }
    })
    
    return { windowWidth, windowHeight }
}
