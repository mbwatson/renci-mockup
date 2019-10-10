import styled from 'styled-components'

export const Heading = styled.h3`
    font-size: 200%;
    padding: 0.25rem 0;
    margin: 0;
    font-weight: normal;
    text-align: ${ ({ center }) => center ? 'center' : 'left' };
`

export const Subheading = styled.h4`
    font-size: 175%;
    padding: 0.25rem 0;
    margin: 0;
    font-weight: normal;
    text-align: ${ ({ center }) => center ? 'center' : 'left' };
    display: flex;
    align-items: center;
`

