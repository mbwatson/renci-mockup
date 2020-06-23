import styled from 'styled-components'

export const Title = styled.h1(({ theme, center }) => `
    text-align: ${ center ? 'center' : 'left' };
    color: ${ theme.color.darkgrey };
    padding: 0.25rem 0.5rem;
    margin: 0;
    padding: 0;
`)

export const Subtitle = styled.h2`
    font-size: 225%;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-weight: normal;
    text-align: ${ ({ center }) => center ? 'center' : 'left' };
`

