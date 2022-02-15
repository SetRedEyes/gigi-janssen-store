import React from "react"
import PropTypes from "prop-types"
import { Form } from "react-bootstrap"

const SelectField = ({
    name,
    label,
    value,
    onChange,
    defaultOption,
    options,
    error,
    marginBottom
}) => {
    const handleChange = ({ target }) => {
        onChange({ name: [target.name], value: target.value })
    }

    const getInputClasses = () => {
        return "form-select" + (error ? " is-invalid" : "")
    }

    const optionsArray =
        !Array.isArray(options) && typeof options === "object"
            ? Object.keys(options).map((optionName) => ({
                  name: options[optionName].name,
                  value: options[optionName]._id
              }))
            : options

    return (
        <Form.Group className={marginBottom}>
            <Form.Label>{label}</Form.Label>
            <Form.Select
                className={getInputClasses()}
                id="validationCustom04"
                value={value}
                onChange={handleChange}
                name={name}
            >
                <option disabled value="">
                    {defaultOption}
                </option>
                {optionsArray &&
                    optionsArray.map((option) => (
                        <option key={option.value} value={option.value}>
                            {option.label}
                        </option>
                    ))}
            </Form.Select>
            {error && (
                <Form.Control.Feedback className="d-flex" type="invalid">
                    {error}
                </Form.Control.Feedback>
            )}
        </Form.Group>
    )
}

SelectField.defaultProps = { marginBottom: "mt-4" }

SelectField.propTypes = {
    defaultOption: PropTypes.string,
    label: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    options: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
    name: PropTypes.string,
    marginBottom: PropTypes.string
}
export default SelectField
