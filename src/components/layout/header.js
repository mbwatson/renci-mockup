import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Header = styled.header(({ theme }) => `
    background: ${ theme.color.primary.main };
    display: flex;
    flex-direction: ${ ({ compact}) => compact ? 'column' : 'row' };
    justify-content: space-between;
    align-items: stretch;
    filter: drop-shadow(0 0 0.5rem rgba(0, 0, 0, 0.5));
`)

Header.propTypes = {
    children: PropTypes.node.isRequired,
}
