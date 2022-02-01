import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator"
import { Button, Form } from "react-bootstrap"
import TextField from "../form/textField"

import { signUp } from "../../store/user"
import { useDispatch } from "react-redux"
const RegisterForm = () => {
    const dispatch = useDispatch()

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({})

    const handleChange = (target) => {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    const validatorConfig = {
        firstName: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должно состаять минимум из 3 символов",
                value: 3
            }
        },
        lastName: {
            isRequired: {
                message: "Фамилия обязательна для заполнения"
            },
            min: {
                message: "Фамилия должна состаять миниму из 3 символов",
                value: 3
            }
        },
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: {
                message: "Email введен некорректно"
            }
        },
        password: {
            isRequired: {
                message: "Пароль обязательна для заполнения"
            },
            isContainDigit: {
                message: "Пароль должен содержать хотя бы одно число"
            },
            min: {
                message: "Пароль должен состаять минимум из 8 символов",
                value: 8
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
        dispatch(signUp(data))
    }

    return (
        <Form onSubmit={handleSubmit}>
            <TextField
                label="Имя"
                name="firstName"
                value={data.firstName}
                onChange={handleChange}
                error={errors.firstName}
            />
            <TextField
                label="Фамилия"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
                error={errors.lastName}
            />
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
            <Button
                type="submit"
                className="mx-auto w-100 submit-btn"
                disabled={!isValid}
            >
                Зарегистрироваться
            </Button>
        </Form>
    )
}

export default RegisterForm
