import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { getCurrentUserData, updateUser } from "../../../store/user"
import { validator } from "../../../utils/validator"

import { Button, Form, Modal } from "react-bootstrap"
import TextField from "../../common/form/textField"
import LoadingSpinner from "../../common/loadingSpinner"
import { SHOP_ROUTE } from "../../../consts"
import history from "../../../utils/history"
import ConfirmedOrderModal from "./confirmedOrederModal"

const initialData = {
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    postOfficeNumber: ""
}

const OrderModal = ({ customerModal, onClose, onClear }) => {
    const dispatch = useDispatch()
    const currentUser = useSelector(getCurrentUserData())
    const [isOrderConfirmed, setIsOrderConfirmed] = useState(false)

    const [data, setData] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (currentUser && !data) {
            setData({
                ...currentUser
            })
        } else {
            setData(initialData)
        }
    }, [currentUser])

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
        onClose()
        dispatch(
            updateUser({
                ...data
            })
        )
        console.log(data)
        setIsOrderConfirmed(true)
    }

    const handleOrderConfirm = () => {
        setIsOrderConfirmed(false)
        history.push(SHOP_ROUTE)
        onClear()
    }
    return (
        <>
            <Modal className="mt-5" show={customerModal} onHide={onClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Данные покупателя</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {" "}
                    {!isLoading ? (
                        <Form onSubmit={handleSubmit}>
                            <TextField
                                label="Имя"
                                name="firstName"
                                value={data.firstName}
                                onChange={handleChange}
                                error={errors.firstName}
                                marginBottom="mb-1"
                            />
                            <TextField
                                label="Фамилия"
                                name="lastName"
                                value={data.lastName}
                                onChange={handleChange}
                                error={errors.lastName}
                                marginBottom="mb-1"
                            />
                            <TextField
                                label="Номер телефона"
                                name="phone"
                                value={data.phone}
                                onChange={handleChange}
                                error={errors.phone}
                                marginBottom="mb-1"
                            />
                            <TextField
                                label="Город"
                                name="city"
                                value={data.city}
                                onChange={handleChange}
                                error={errors.city}
                                marginBottom="mb-1"
                            />
                            <TextField
                                label="Номер отделения Новой Почты"
                                name="postOfficeNumber"
                                value={data.postOfficeNumber}
                                onChange={handleChange}
                                error={errors.postOfficeNumber}
                                marginBottom="mb-1"
                            />
                            <hr />
                            <Button
                                type="submit"
                                disabled={isValid}
                                className="w-100 submit-btn"
                            >
                                Подтвердить
                            </Button>
                        </Form>
                    ) : (
                        <LoadingSpinner />
                    )}
                </Modal.Body>
            </Modal>

            <ConfirmedOrderModal
                isConfirmed={isOrderConfirmed}
                onConfirm={handleOrderConfirm}
            />
        </>
    )
}

OrderModal.propTypes = {
    customerModal: PropTypes.bool,
    onClose: PropTypes.func,
    onClear: PropTypes.func
}

export default OrderModal
