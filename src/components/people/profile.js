import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Title, Heading, Paragraph } from '../typography'
import { SocialLinks } from '../social-links'

const Wrapper = styled.div(({ theme }) => `
    display: grid;
    grid-template-columns: 100%;
    @media (min-width: 768px) {
        grid-template-columns: 380px auto;
    }
    column-gap: ${ theme.spacing.small };
    margin: ${ theme.spacing.large } 0;
`)

const PhotoContainer = styled.div(({ theme }) => `
    grid-row: 1 / 2;
    grid-column: 1 / 2;
    justify-self: center;
    @media (min-width: 768px) {
        grid-row: 1 / 3;
        justify-self: start;
    }
    // margin: ${ theme.spacing.medium };
`)

const Details = styled.div`
    grid-row: 2 / 3;
    grid-column: 1 / 2;
    justify-self: center;
    @media (min-width: 768px) {
        grid-row: 1 / 2;
        grid-column: 2 / 3;
        justify-self: start;
    }
`

const Footer = styled.div`
    grid-row: 3 / 4;
    grid-column: 1 / 3;
    justify-self: center;
    @media (min-width: 768px) {
        grid-row: 2 / 3;
        grid-column: 2 / 3;
        justify-self: start;
    }
`

export const Profile = ({ name, title, email, online_presence, photo, phone }) => {
    return (
        <Wrapper>
            <PhotoContainer>
                <Img style={{ width: '350px', height: '350px' }} fixed={ photo } />
            </PhotoContainer>
            <Details>
                <Title>{ name }</Title>
                <Paragraph>
                    { title } <br/>
                    <a href={ `mailto:${ email }`}>{ email }</a> <br/>
                    { phone }
                </Paragraph>
            </Details>
            <Footer>
                <SocialLinks
                    url={ online_presence.url }
                    twitter={ online_presence.twitter_username }
                    github={ online_presence.github_username }
                    instagram={ online_presence.instagram }
                    linkedin={ online_presence.linkedin }
                    youtube={ online_presence.youtube }
                />                
            </Footer>
        </Wrapper>
    )
}

