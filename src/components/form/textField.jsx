import React, { useState } from "react"
import { Button, Form, InputGroup } from "react-bootstrap"
import PropTypes from "prop-types"

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }

  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  const getInputClasses = () => {
    return "form-control" + (error ? " is-invalid" : "")
  }

  return (
    <Form.Group className="mb-4">
      <Form.Label>{label}</Form.Label>
      <InputGroup>
        <Form.Control
          type={showPassword ? "text" : type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
        ></Form.Control>

        {type === "password" && (
          <Button
            variant="outline-secondary"
            id="button-addon1"
            onClick={toggleShowPassword}
          >
            <i className={"bi bi-eye" + (showPassword ? "" : "-slash")}></i>
          </Button>
        )}
      </InputGroup>
      {error && (
        <Form.Control.Feedback className="d-flex" type="invalid">
          {error}
        </Form.Control.Feedback>
      )}
    </Form.Group>
  )
}

TextField.defaultProps = { type: "text" }

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string
}

export default TextField
