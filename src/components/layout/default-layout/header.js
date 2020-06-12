import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Header = styled.header(({ theme, compact, dark }) => `
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;
    background-color: ${ theme.color.white };
    padding: 0 1rem;
    ${ dark ? `background-color: ${ theme.color.black };` : undefined }
`)

Header.propTypes = {
    children: PropTypes.node.isRequired,
}
