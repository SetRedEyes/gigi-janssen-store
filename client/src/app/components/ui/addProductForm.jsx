import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getCompanies, getCompaniesLoadingStatus } from "../../store/companies"
import {
    getCategoriesByCompany,
    getCategoriesLoadingStatus
} from "../../store/categories"
import { createProduct } from "../../store/products"
import { validator } from "../../utils/validator"

import { Button, Form } from "react-bootstrap"
import LoadingSpinner from "../common/loadingSpinner"
import SelectField from "../common/form/selectField"
import TextField from "../common/form/textField"

const initialData = {
    vendorCode: "",
    name: "",
    rusName: "",
    companyName: "",
    category: "",
    price: "",
    volume: "",
    photo: ""
}

const AddProductForm = () => {
    const dispatch = useDispatch()
    const [data, setData] = useState(initialData)
    const [isLoading, setIsLoading] = useState(true)
    const [errors, setErrors] = useState({})

    const companies = useSelector(getCompanies())
    const companiesLoading = useSelector(getCompaniesLoadingStatus())
    const companiesList =
        !companiesLoading &&
        companies.map((c) => ({
            label: c.fullName,
            value: c.name
        }))

    const categories = useSelector(getCategoriesByCompany(data.companyName))
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())
    const categoriesList =
        !categoriesLoading &&
        categories.map((c) => ({
            label: c.fullName.split("-")[0],
            value: c.name
        }))

    useEffect(() => {
        if (data && isLoading && !companiesLoading && !categoriesLoading) {
            setIsLoading(false)
        }
    }, [data, companiesLoading, categoriesLoading])

    const handleChange = (target) => {
        setData((prevState) => ({
            ...prevState,
            [target.name]: target.value
        }))
    }

    const validatorConfig = {
        vendorCode: {
            isRequired: {
                message: "Артикул обязателен для заполнения"
            }
        },
        name: {
            isRequired: {
                message: "Наименование обязательно для заполнения"
            }
        },
        rusName: {
            isRequired: {
                message: "Наименование обязательно для заполнения"
            }
        },
        companyName: {
            isRequired: {
                message: "Обязательно выберите компанию"
            }
        },
        category: {
            isRequired: {
                message: "Обязательно выберите котегорию"
            }
        },
        price: {
            isRequired: {
                message: "Цена обязательна для заполнения"
            }
        },
        volume: {
            isRequired: {
                message: "Объем обязателен для заполнения"
            }
        },
        photo: {
            isRequired: {
                message: "Cсылка на фото обязательна"
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

    const clearForm = () => {
        setData(initialData)
        setErrors({})
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const isValid = validate()
        if (!isValid) return

        dispatch(
            createProduct({
                ...data,
                price: data.price.split(",").map((el) => +el),
                volume: data.volume.split(",").map((el) => +el)
            })
        )
        clearForm()
    }

    return (
        <div className="mt-3 add-panel">
            <h5 className="text-center">Добавление товара</h5>
            {!isLoading && Object.keys(companies).length > 0 ? (
                <Form onSubmit={handleSubmit} className="add-form">
                    <TextField
                        label="Артикул"
                        name="vendorCode"
                        marginBottom="mb-1"
                        value={data.vendorCode}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Английское наименование"
                        name="name"
                        marginBottom="mb-1"
                        value={data.name}
                        onChange={handleChange}
                    />
                    <TextField
                        label="Русское наименование"
                        name="rusName"
                        marginBottom="mb-1"
                        value={data.rusName}
                        onChange={handleChange}
                    />
                    <SelectField
                        label="Компания"
                        name="companyName"
                        marginBottom="mb-1"
                        value={data.companyName}
                        onChange={handleChange}
                        options={companiesList}
                    />
                    <SelectField
                        label="Категория"
                        name="category"
                        marginBottom="mb-1"
                        value={data.category}
                        onChange={handleChange}
                        options={categoriesList}
                        defaultOption={
                            categories.length < 1 ? "Сначала выберите компанию" : ""
                        }
                    />
                    <TextField
                        label="Цена"
                        name="price"
                        marginBottom="mb-1"
                        onChange={handleChange}
                        value={data.price}
                        placeholder="Введите цены через запятую"
                    />
                    <TextField
                        label="Объем"
                        name="volume"
                        marginBottom="mb-1"
                        value={data.volume}
                        onChange={handleChange}
                        placeholder="Ведите объемы через запятую"
                    />
                    <TextField
                        label="Фото"
                        name="photo"
                        marginBottom="mb-3"
                        value={data.photo}
                        onChange={handleChange}
                    />
                    {isValid && (
                        <h6 className="text-danger text-center mt-2">
                            Все поля обязательны для заполнения
                        </h6>
                    )}
                    <Button
                        type="submit"
                        disabled={isValid}
                        className="w-100 submit-btn mt-1"
                    >
                        Добавить
                    </Button>
                </Form>
            ) : (
                <LoadingSpinner />
            )}
        </div>
    )
}

export default AddProductForm
