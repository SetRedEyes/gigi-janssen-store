import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login, getAuthErrors } from "../../store/user"
import { validator } from "../../utils/validator"
import history from "../../utils/history"
import { SHOP_ROUTE } from "../../consts"

import { Button, Form } from "react-bootstrap"
import TextField from "../common/form/textField"

const LoginForm = () => {
    const dispatch = useDispatch()
    const loginError = useSelector(getAuthErrors())
    const [data, setData] = useState({ email: "", password: "" })
    const [errors, setErrors] = useState({})

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
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
            : SHOP_ROUTE

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

            {loginError && <p className="text-danger">{loginError}</p>}

            <Button
                type="submit"
                className="w-100 submit-btn"
                disabled={!isValid}
            >
                Войти
            </Button>
        </Form>
    )
}

export default LoginForm
