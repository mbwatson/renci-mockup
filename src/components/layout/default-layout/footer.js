import styled from 'styled-components'

export const Footer = styled.footer(({ theme }) => `
    background: ${ theme.color.white };
    padding: 1rem;
    color: ${ theme.color.primary.main };
    border-top: 1px solid ${ theme.color.grey };
`)