import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Title, Heading, Paragraph } from '../typography'
import { SocialLinks } from '../social-links'

const Wrapper = styled.div(({ theme }) => `
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    margin: ${ theme.spacing.large } 0;
`)

const PhotoContainer = styled.div(({ theme }) => `
    margin: ${ theme.spacing.medium };
`)

const Details = styled.div`
    flex: 1;
`

export const Profile = ({ name, title, email, online_presence, photo, phone }) => {
    return (
        <Wrapper>
            <PhotoContainer>
                <Img style={{ width: '200px', height: '200px' }} fixed={ photo } />
            </PhotoContainer>
            <Details>
                <Title>{ name }</Title>
                <Paragraph>
                    { title } <br/>
                    <a href={ `mailto:${ email }`}>{ email }</a> <br/>
                    { phone }
                </Paragraph>
                <SocialLinks
                    url={ online_presence.url }
                    twitter={ online_presence.twitter }
                    github={ online_presence.github }
                    instagram={ online_presence.instagram }
                    linkedin={ online_presence.linkedin }
                    youtube={ online_presence.youtube }
                />                
            </Details>
        </Wrapper>
    )
}

