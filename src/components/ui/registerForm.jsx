import React, { useEffect, useState } from "react"
import { validator } from "../../utils/validator"
import { Button, Form } from "react-bootstrap"
import TextField from "../form/textField"

const RegisterForm = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    licese: false
  })

  const [errors, setErrors] = useState({})

  const handleChange = (target) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  const validatorConfig = {
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
        message: "Пароль должен состаять миниму из 8 символов",
        value: 8
      }
    },
    licence: {
      isRequired: {
        message:
          "Вы не можете использовать наш сервис без подтреврждения лицензионного соглашения"
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
    if (isValid) return
    console.log(data)
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
      <Button type="submit" className="mx-auto w-100 submit-btn" disabled={!isValid}>
        Отправить данные
      </Button>
    </Form>
  )
}

export default RegisterForm
