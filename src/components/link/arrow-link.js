import React from 'react'
import styled, { useTheme } from 'styled-components'
import { Link } from 'gatsby'
import { ArrowRightIcon } from '../icons'

const Wrapper = styled(Link)`
    display: inline-flex;
    align-items: center;
    float: right;
    & svg {
        margin-left: 0.25rem;
    }
`

export const ArrowLink = ({ text, ...props }) => {
    const theme = useTheme()
    return (
        <Wrapper { ...props }>
            { text } <ArrowRightIcon fill={ theme.color.darkgrey } size={ 14 } />
        </Wrapper>
    )
}
