import styled from 'styled-components'

export const Card = styled.div`
    border-radius: 0.25rem;
    margin-bottom: 2rem;
    background-color: #fff;
    filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.1));
    transition: filter 250ms;
    &:hover {
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.2));
    }
`

export const CardHeader = styled.header`
    padding: 0.5rem 1rem;
    display: flex;
    border-bottom: 1px solid #eee;
    display: flex;
    align-items: center;
`

export const CardBody = styled.main`
    padding: 1rem;
`

export const CardFooter = styled.footer`
    border-top: 1px solid #eee;
    padding: 1rem;
`

