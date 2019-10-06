import styled from 'styled-components'
import PropTypes from 'prop-types'

export const Header = styled.header`
    background: rebeccapurple;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
`

Header.propTypes = {
    children: PropTypes.node.isRequired,
}
