import React from 'react'
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
    color: ${ theme.color.whitish };
    h1 {
        color: ${ theme.color.lightgrey };
    }
`)

const Wrapper = styled.div(({ theme }) => `
    position: relative;
    background: ${ theme.color.black };
    min-height: 300px;
    overflow: hidden;
    &::after {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        background-color: ${ theme.color.renciBlue }33;
    }
`)

export const Hero = ({ backgroundImage, children }) => {
    const { scrollPosition } = useScrollPosition()

    return (
        <Wrapper>
            { backgroundImage && <Img fluid={ backgroundImage } style={{ height: '300px' }} imgStyle={{ transform: `translateY(${ scrollPosition / 2 }px)` }} /> }
            <Content>
                { children }
            </Content>
        </Wrapper>
    )
}
