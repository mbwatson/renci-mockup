import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Header = styled.header`
    background: rebeccapurple;
    display: flex;
    flex-direction: ${ ({ compact}) => compact ? 'column' : 'row' };
    justify-content: space-between;
`

Header.propTypes = {
    children: PropTypes.node.isRequired,
}
