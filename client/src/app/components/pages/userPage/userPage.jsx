import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserData, updateUser } from "../../../store/user"
import { validator } from "../../../utils/validator"
import { LOGOUT_ROUTE } from "../../../consts"

import { Link } from "react-router-dom"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import LoadingSpinner from "../../common/loadingSpinner"
import BackHistoryButton from "../../common/backButton"
import TextField from "../../common/form/textField"

const UserPage = () => {
    const dispatch = useDispatch()
    const currentUser = useSelector(getCurrentUserData())
    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (currentUser && !data) {
            setData({
                ...currentUser
            })
        }
    }, [currentUser, data])

    useEffect(() => {
        if (data && isLoading) {
            setIsLoading(false)
        }
    }, [data])

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        email: {
            isRequired: {
                message: "Электронная почта обязательна для заполнения"
            },
            isEmail: { message: "Электронная почта введена не корректно" }
        },
        firstName: {
            isRequired: {
                message: "Имя обязательно для заполнения"
            },
            min: {
                message: "Имя должно состоять минимум из 3 символов",
                value: 3
            }
        },
        lastName: {
            isRequired: {
                message: "Фамилия обязательна для заполнения"
            },
            min: {
                message: "Фамилия должна состоять минимум из 3 символов",
                value: 3
            }
        },
        phone: {
            isRequired: {
                message: "Номер телефона обязателен для заполнения"
            }
        },
        city: {
            isRequired: {
                message: "Название города обязательно для заполнения"
            }
        },
        postOfficeNumber: {
            isRequired: {
                message: "Номер почтового отделения обязательнен для заполнения"
            }
        }
    }

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    useEffect(() => {
        validate()
    }, [data])
    const isValid = Object.keys(errors).length !== 0

    const handleSubmit = (e) => {
        e.preventDefault()

        const isValid = validate()
        if (!isValid) return
        dispatch(
            updateUser({
                ...data
            })
        )
    }

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="shadow p-5 ">
                    <div className="flex-between">
                        <BackHistoryButton />

                        <Link to={LOGOUT_ROUTE} className="action-btn">
                            Выйти из аккаунта
                        </Link>
                    </div>
                    {!isLoading && Object.keys(currentUser).length > 0 ? (
                        <Form className="mt-4" onSubmit={handleSubmit}>
                            <TextField
                                label="Электронная почта"
                                name="email"
                                value={data.email}
                                onChange={handleChange}
                                error={errors.email}
                                disabled={true}
                            />
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
                                label="Номер телефона"
                                name="phone"
                                value={data.phone}
                                onChange={handleChange}
                                error={errors.phone}
                            />
                            <TextField
                                label="Город"
                                name="city"
                                value={data.city}
                                onChange={handleChange}
                                error={errors.city}
                            />
                            <TextField
                                label="Номер отделения Новой Почты"
                                name="postOfficeNumber"
                                value={data.postOfficeNumber}
                                onChange={handleChange}
                                error={errors.postOfficeNumber}
                            />
                            <Button
                                type="submit"
                                disabled={isValid}
                                className="w-100 submit-btn"
                            >
                                Отправить данные
                            </Button>
                        </Form>
                    ) : (
                        <LoadingSpinner />
                    )}
                </Col>
            </Row>
        </Container>
    )
}

export default UserPage
