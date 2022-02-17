import React, { useEffect, useState } from "react"
import TextField from "../../common/form/textField"
import PropTypes from "prop-types"
import LoadingSpinner from "../../common/loadingSpinner"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import SelectField from "../../common/form/selectField"
import { validator } from "../../../utils/validator"
import { useDispatch, useSelector } from "react-redux"
import {
    getCategoriesByCompany,
    getCategoriesLoadingStatus
} from "../../../store/categories"
import { getCompanies, getCompaniesLoadingStatus } from "../../../store/companies"
import { getProductById, updateProductData } from "../../../store/products"
import BackHistoryButton from "../../common/backButton"
import { useParams } from "react-router-dom"

const EditProductPage = () => {
    const { productId } = useParams()
    const dispatch = useDispatch()
    const product = useSelector(getProductById(productId))
    const [data, setData] = useState({})

    const companies = useSelector(getCompanies())
    console.log(companies)

    const companiesLoading = useSelector(getCompaniesLoadingStatus())
    const companiesList = companies.map((c) => ({
        label: c.fullName,
        value: c.name
    }))

    const categories = useSelector(getCategoriesByCompany(data.companyName))
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())
    const categoriesList = categories.map((c) => ({
        label: c.fullName.split("-")[0],
        value: c.name
    }))

    const [isLoading, setIsLoading] = useState(true)
    const [errors, setErrors] = useState({})

    useEffect(() => {
        if (!companiesLoading && !categoriesLoading && product) {
            setData({
                ...product,
                price: product.price.join(","),
                volume: product.volume.join(",")
            })
        }
    }, [companiesLoading, categoriesLoading, productId])

    const handleSubmit = (e) => {
        e.preventDefault()

        const isValid = validate()
        if (!isValid) return
        dispatch(
            updateProductData({
                ...data,
                price: data.price.split(",").map((el) => +el),
                volume: data.volume.split(",").map((el) => +el)
            })
        )
    }

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

    useEffect(() => {
        validate()
    }, [data])

    const validate = () => {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
        return Object.keys(errors).length === 0
    }

    const isValid = Object.keys(errors).length !== 0

    return (
        <Container>
            <Row>
                <Col md={{ span: 6, offset: 3 }} className="shadow p-4">
                    <div className="d-flex justify-content-between align-items-center">
                        <h5 className="align-self-bottom">Добавление товара</h5>

                        <BackHistoryButton />
                    </div>
                    {!isLoading && Object.keys(companies).length > 0 ? (
                        <Form onSubmit={handleSubmit} className="edit-form">
                            <TextField
                                label="Артикул"
                                name="vendorCode"
                                marginBottom="mt1"
                                value={data.vendorCode}
                                onChange={handleChange}
                                error={errors.vendorCode}
                            />
                            <TextField
                                label="Английское наименование"
                                name="name"
                                marginBottom="mt-1"
                                value={data.name}
                                onChange={handleChange}
                                error={errors.name}
                            />
                            <TextField
                                label="Русское наименование"
                                name="rusName"
                                marginBottom="mt-1"
                                value={data.rusName}
                                onChange={handleChange}
                                error={errors.rusName}
                            />
                            <SelectField
                                label="Компания"
                                name="companyName"
                                marginBottom="mt-1"
                                value={data.companyName}
                                onChange={handleChange}
                                error={errors.companyName}
                                options={companiesList}
                            />
                            <SelectField
                                label="Категория"
                                name="category"
                                marginBottom="mt-1"
                                value={data.category}
                                onChange={handleChange}
                                error={errors.category}
                                options={categoriesList}
                                defaultOption={
                                    categories.length < 1
                                        ? "Сначала выберите компанию"
                                        : ""
                                }
                            />
                            <TextField
                                label="Цена"
                                name="price"
                                marginBottom="mt-1"
                                value={data.price}
                                onChange={handleChange}
                                error={errors.price}
                                placeholder="Введите цены через запятую"
                            />
                            <TextField
                                label="Объем"
                                name="volume"
                                marginBottom="mt-1"
                                value={data.volume}
                                onChange={handleChange}
                                error={errors.volume}
                                placeholder="Ведите объемы через запятую"
                            />
                            <TextField
                                label="Фото"
                                name="photo"
                                marginBottom="mt-1"
                                value={data.photo}
                                onChange={handleChange}
                                error={errors.photo}
                            />

                            <Button
                                type="submit"
                                disabled={isValid}
                                className="btn btn-primary w-100 mx-auto submit-btn mt-3"
                            >
                                Редактировать товар
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

EditProductPage.propTypes = {
    productId: PropTypes.string
}
export default EditProductPage
