import styled from 'styled-components'

export const HorizontalRule = styled.hr(({ theme }) => `
    border: 0;
    height: 1px;
    margin: auto;
    width: calc(100% - 4rem);
    max-width: 1200px;
    background: ${ theme.color.lightgrey };
`)
