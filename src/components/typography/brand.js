import styled from 'styled-components'

export const Brand = styled.h1`
    font-size: 300%;
    margin: 1rem;
    font-weight: normal;
    text-align: ${ ({ center }) => center ? 'center' : 'left' };
    display: flex;
    justify-content: center;
    align-items: center;
`
