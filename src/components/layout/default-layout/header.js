import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Header = styled.header(({ theme, compact }) => `
    background: ${ theme.color.black };
    width: 100%;
    display: flex;
    flex-direction: ${ compact ? 'column' : 'row' };
    justify-content: space-between;
    align-items: stretch;
`)

Header.propTypes = {
    children: PropTypes.node.isRequired,
}
