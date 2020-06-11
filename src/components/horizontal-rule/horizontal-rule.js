import styled from 'styled-components'

export const HorizontalRule = styled.hr(({ theme }) => `
    border: 0;
    height: 1px;
    margin: 1rem;
    background: ${ theme.color.lightgrey };
`)
