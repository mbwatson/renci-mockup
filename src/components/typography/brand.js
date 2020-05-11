import styled from 'styled-components'

export const Brand = styled.h1`
    font-size: 300%;
    padding: 0.25rem 0.5rem;
    margin: 0;
    font-weight: normal;
    text-align: ${ ({ center }) => center ? 'center' : 'left' };
`
