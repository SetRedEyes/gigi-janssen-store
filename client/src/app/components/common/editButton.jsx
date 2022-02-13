import React from "react"
import { Button } from "react-bootstrap"
import PropTypes from "prop-types"

const EditButton = ({ ...rest }) => {
    return (
        <Button {...rest}>
            <i className="bi bi-gear" />
        </Button>
    )
}
EditButton.propTypes = {
    status: PropTypes.string
}
export default EditButton
