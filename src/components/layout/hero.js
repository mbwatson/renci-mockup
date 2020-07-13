import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Img from 'gatsby-image'
import { useScrollPosition } from '../../hooks'

const Content = styled.div(({ theme }) => `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: ${ theme.spacing.large };
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: calc(100% - 2 * ${ theme.spacing.extraLarge });
    max-width: 1200px;
    margin: 0 auto;
    background-color: ${ theme.color.black }66;
    & h1, & p {
        color: ${ theme.color.whitish };
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

const Wrapper = styled.div(({ theme, backgroundColor }) => `
    position: relative;
    min-height: 400px;
    overflow: hidden;
    background-color: ${ backgroundColor };
`)

export const Hero = ({ backgroundImage, backgroundColor, overlayColor, children }) => {
    const { scrollPosition } = useScrollPosition()

    return (
        <Wrapper backgroundColor={ backgroundColor }>
            {
                backgroundImage && (
                    <Img
                        fluid={ backgroundImage }
                        style={{ height: '400px' }}
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
    backgroundColor: PropTypes.string,
    overlayColor: PropTypes.string.isRequired,
    children: PropTypes.node,
}

Hero.defaultProps = {
    backgroundColor: '#00abc7',
    overlayColor: '#fff',
}
