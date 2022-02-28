import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

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
