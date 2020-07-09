import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useScrollPosition } from '../../hooks'

const Content = styled.div(({ theme }) => `
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    padding: ${ theme.spacing.large };
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    background-color: transparent;
    color: ${ theme.color.whitish };
    h1 {
        color: ${ theme.color.lightgrey };
    }
`)

const Overlay = styled.div(({ theme, color }) => `
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${ color };
    opacity: 0.1;
`)

const Wrapper = styled.div(({ theme }) => `
    position: relative;
    min-height: 300px;
    overflow: hidden;
`)

export const Hero = ({ backgroundImage, overlayColor, children }) => {
    const { scrollPosition } = useScrollPosition()

    return (
        <Wrapper>
            {
                backgroundImage && (
                    <Img
                        fluid={ backgroundImage }
                        style={{ height: '300px' }}
                        imgStyle={{ transform: `translateY(${ scrollPosition / 2 }px)` }}
                    />
                )
            }
            <Overlay color={ overlayColor } />
            <Content>
                { children }
            </Content>
        </Wrapper>
    )
}

Hero.propTypes = {
    backgroundImage: PropTypes.object,
    overlayColor: PropTypes.string.isRequired,
    children: PropTypes.node,
}

Hero.defaultProps = {
    overlayColor: '#fff',
}
