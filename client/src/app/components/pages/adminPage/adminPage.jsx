import React, { useEffect, useState } from "react"
import { Col, Container, FormControl, InputGroup, Row } from "react-bootstrap"
import { getProducts } from "../../../store/products"
import ProductsTable from "../../ui/productsTable"
import { useSelector } from "react-redux"
import LoadingSpinner from "../../common/loadingSpinner"
import PagesPagination from "../../common/pagination"
import { paginate } from "../../../utils/paginate"
import _ from "lodash"
import AdminEditPanel from "../../ui/adminEditPanel"

const adminPage = () => {
    const products = useSelector(getProducts())
    const [currentPage, setCurrentPage] = useState(1)
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" })
    const [searchQuery, setSearchQuery] = useState("")
    const pageSize = 9

    const handleDeleteProduct = (productId) => {
        // setUsers((users) => users.filter((user) => user._id !== userId))
        console.log(productId)
    }

    const handleEditProduct = (productId) => {
        console.log(productId)
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
    useEffect(() => {
        setCurrentPage(1)
    }, [searchQuery])

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
                            <AdminEditPanel />
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
                                    onEditProduct={handleEditProduct}
                                    onDeleteProduct={handleDeleteProduct}
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
