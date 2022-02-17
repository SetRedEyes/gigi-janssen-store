import React, { useEffect, useState } from "react"
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap"
import { getProducts, removeProduct } from "../../../store/products"
import ProductsTable from "../../ui/productsTable"
import { useDispatch, useSelector } from "react-redux"
import LoadingSpinner from "../../common/loadingSpinner"
import PagesPagination from "../../common/pagination"
import { paginate } from "../../../utils/paginate"
import _ from "lodash"
import AddProductForm from "../../ui/addProductForm"
import history from "../../../utils/history"

const adminPage = () => {
    const dispatch = useDispatch()
    const products = useSelector(getProducts())

    const [currentPage, setCurrentPage] = useState(1)
    const [sortBy, setSortBy] = useState({ path: "name", order: "asc" })
    const [searchQuery, setSearchQuery] = useState("")
    const pageSize = 9

    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery])

    const handleEditProduct = (productId) => {
        console.log(productId)
        history.push(`/gigi-janssen-store/${productId}`)
    }

    const handleRemoveProduct = (productId) => {
        dispatch(removeProduct(productId))
    }

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSearchQuery = ({ target }) => {
        setSearchQuery(target.value)
    }

    const handleSort = (item) => {
        setSortBy(item)
    }

    if (products) {
        const filteredProducts = searchQuery
            ? products.filter(
                  (p) =>
                      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      p.rusName.toLowerCase().includes(searchQuery.toLowerCase()) ||
                      p.vendorCode.toLowerCase().includes(searchQuery.toLowerCase())
              )
            : products

        const count = filteredProducts.length

        const sortedProducts = _.orderBy(
            filteredProducts,
            [sortBy.path],
            [sortBy.order]
        )
        const productsCrop = paginate(sortedProducts, currentPage, pageSize)

        return (
            <Container fluid>
                <Row>
                    <Col md={3}>
                        <Row>
                            <AddProductForm />
                        </Row>
                    </Col>
                    <Col md={9}>
                        <Row className="me-3">
                            <InputGroup className="mt-3">
                                <FormControl
                                    placeholder="Поиск..."
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                    onChange={handleSearchQuery}
                                    required
                                    name="searchQuery"
                                    value={searchQuery}
                                />
                            </InputGroup>
                            {count > 0 ? (
                                <ProductsTable
                                    products={productsCrop}
                                    onSort={handleSort}
                                    selectedSort={sortBy}
                                    onEdit={handleEditProduct}
                                    onRemove={handleRemoveProduct}
                                />
                            ) : (
                                <h1 className="text-center mt-5 ">
                                    По Вашему запросу ({searchQuery}) ничего не
                                    найдено. Пожалуйста, измените параметры поиска.
                                </h1>
                            )}
                        </Row>
                        <Row className="mt-2">
                            <PagesPagination
                                itemsCount={count}
                                currentPage={currentPage}
                                onPageChange={handlePageChange}
                                pageSize={pageSize}
                            />
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    } else {
        return <LoadingSpinner />
    }
}

export default adminPage
