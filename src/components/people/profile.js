import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { AvatarIcon } from '../icons'
import { Container, Row, Col } from 'react-grid-system'
import { Card, CardHeader, CardBody } from '../card'
import { Subheading, Meta, TextLink } from '../typography'

const Wrapper = styled.div`
    flex: 1;
    max-width: 200px;
    margin: 1rem;
`

const StaffName = styled(Subheading)`
    font-size: 110%;
`

const StaffTitle = styled(Meta)`
    font-size: 80%;
`

export const Profile = ({ name, title, path, photo }) => {
    return (
        <Wrapper>
            <Img fixed={ photo } />
            <StaffName><Link to={ path }>{ name }</Link></StaffName>
            <StaffTitle>{ title }</StaffTitle>
        </Wrapper>
    )
}
