import React, { Fragment } from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

const Header = styled.h2(({ theme }) => `
    flex: 3;
    @media (min-width: 992px) { text-align: right; }
    font-weight: bold;
    padding: ${ theme.spacing.small };
`)

const Wrapper = styled.section(({ theme, fullWidth }) => `
    width: 100%;
    max-width: 1200px;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    ${
        fullWidth ? `
            & ${ Header } { text-align: left; }
        ` : `
            @media (min-width: 992px) { flex-direction: row; }
        `
    }
`)

const Content = styled.div(({ theme }) => `
    flex: 7;
    padding: ${ theme.spacing.small };
`)

export const Section = ({ title, children, fullWidth }) => {
    return (
        <Fragment>
            <Wrapper fullWidth={ fullWidth }>
                <Header>{ title }</Header>
                <Content>{ children }</Content>
            </Wrapper>
        </Fragment>
    )
}

Section.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
    fullWidth: PropTypes.bool.isRequired,
}

Section.defaultProps = {
    fullWidth: false,
}