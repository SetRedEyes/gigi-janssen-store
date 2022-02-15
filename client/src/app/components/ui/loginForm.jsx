import React, { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import { useDispatch } from "react-redux"
import { login } from "../../store/user"
import { validator } from "../../utils/validator"
import history from "../../utils/history"

import TextField from "../common/form/textField"

const LoginForm = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState({ email: "", password: "", stayOn: false })
    const [errors, setErrors] = useState({})
    const [enterError, setEnterError] = useState(null)

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
        setEnterError(null)
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязателен для заполнения"
            }
        }
    }

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length === 0

    const handleSubmit = (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        const redirect = history.location.state
            ? history.location.state.from.pathname
            : "/gigi-janssen-store"

        dispatch(login({ payload: data, redirect }))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                label="Электронная почта"
                name="email"
                value={data.email}
                onChange={handleChange}
                error={errors.email}
            />
            <TextField
                label="Пароль"
                type="password"
                name="password"
                value={data.password}
                onChange={handleChange}
                error={errors.password}
            />

            {enterError && <p className="text-danger">{enterError}</p>}
            <Button
                type="submit"
                className="mx-auto w-100 submit-btn"
                disabled={!isValid || enterError}
            >
                Войти
            </Button>
        </Form>
    )
}

export default LoginForm
