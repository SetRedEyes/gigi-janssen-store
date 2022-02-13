import React from "react"
import { Button } from "react-bootstrap"
import PropTypes from "prop-types"

const DeleteButton = ({ ...rest }) => {
    return (
        <Button className="btn btn-danger" {...rest}>
            <i className="bi bi-x-lg"></i>
        </Button>
    )
}
DeleteButton.propTypes = {
    status: PropTypes.string
}
export default DeleteButton
