import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

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
