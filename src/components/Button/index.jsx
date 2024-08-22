import { Button } from './style'
import PropTypes from 'prop-types'

function DefaultButton({ children, thema, ...props }) {
    return (
        <Button {...props} thema={thema}>{children}</Button>
    )
}

DefaultButton.prototype = {
    children: PropTypes.node.isRequired,
    thema: PropTypes.string
}

export default Button
