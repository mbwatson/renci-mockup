import React from 'react'
import styled from 'styled-components'
import Img from 'gatsby-image'

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
`)

const Wrapper = styled.div(({ theme }) => `
    position: relative;
    background: ${ theme.color.black };
    min-height: 400px;
`)

export const Hero = ({ backgroundImage, children }) => {
    return (
        <Wrapper>
            { backgroundImage && <Img fluid={ backgroundImage } /> }
            <Content>
                { children }
            </Content>
        </Wrapper>
    )
}
