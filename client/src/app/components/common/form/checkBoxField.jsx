import React from "react"
import PropTypes from "prop-types"
import { Form } from "react-bootstrap"

const CheckBoxField = ({ name, value, onChange, children, error }) => {
    const handleChange = () => {
        onChange({ name: name, value: !value })
    }

    return (
        <Form.Group className="mb-3">
            <Form.Check
                type="checkbox"
                label={children}
                id={name}
                value=""
                checked={value}
                onChange={handleChange}
                feedback={error}
                feedbackType="invalid"
            />
        </Form.Group>
    )
}

CheckBoxField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]),
    error: PropTypes.string
}

export default CheckBoxField
