import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Wrapper = styled.section`
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    @media (min-width: 768px) {
        flex-direction: row;
    }
`

const Header = styled.h2(({ theme }) => `
    flex: 3;
    text-align: left;
    @media (min-width: 768px) { text-align: right; }
    font-weight: bold;
    padding: ${ theme.spacing.small };
`)

const Content = styled.div(({ theme }) => `
    flex: 7;
    padding: ${ theme.spacing.small };
`)

export const Section = ({ title, children, borderBottom }) => {
    return (
        <Fragment>
            <Wrapper borderBottom={ borderBottom }>
                <Header>{ title }</Header>
                <Content>{ children }</Content>
            </Wrapper>
        </Fragment>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}