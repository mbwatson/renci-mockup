import React from 'react'

export const StopIcon = ({ size, ...rest }) => {
    return (
        <svg { ...rest } version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width={ `${ size }px` } height={ `${ size }px` } viewBox="0 0 24 24">
            <path d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 6h12v12H6z"/>
        </svg>    )
}
