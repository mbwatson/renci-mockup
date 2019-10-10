import styled from 'styled-components'

export const Title = styled.h1`
    font-size: 250%;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-weight: normal;
    text-align: ${ ({ center }) => center ? 'center' : 'left' };
`

export const Subtitle = styled.h2`
    font-size: 225%;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-weight: normal;
    text-align: ${ ({ center }) => center ? 'center' : 'left' };
`

