import React, { useEffect, useState } from "react"
import { Button, Form } from "react-bootstrap"
import TextField from "../form/textField"
import { validator } from "../../utils/validator"
import CheckBoxField from "../form/checkBoxField"
import { useAuth } from "../../hooks/useAuth"
import { useHistory } from "react-router-dom"

const LoginForm = () => {
    const history = useHistory()

    const { logIn } = useAuth()

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        const isValid = validate()
        if (!isValid) return
        try {
            await logIn(data)
            history.push("/online-store-v2")
        } catch (error) {
            setEnterError(error.message)
            console.log(error)
        }
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
            <CheckBoxField value={data.stayOn} onChange={handleChange} name="stayOn">
                Оставаться в системе
            </CheckBoxField>
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
