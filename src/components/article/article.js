import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.article``

const Header = styled.h3`
    font-weight: bold;
    text-transform: uppercase;
    margin: 0;
    line-height: 2.35;
`

const Body = styled.div``

export const Article = ({ title, children }) => {
    return (
        <Wrapper>
            <Header>{title}</Header>
            <Body>
                {children}
            </Body>
        </Wrapper>
    )
}


Article.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
}