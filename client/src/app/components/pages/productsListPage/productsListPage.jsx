import React, { useEffect, useState } from "react"
import { paginate } from "../../../utils/paginate"
import { Row, Col, Container, Spinner } from "react-bootstrap"
import PagesPagination from "../../../components/common/pagination"
import GroupList from "../../../components/common/groupList"
import ProductsListCard from "../../ui/productsListCard"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import SortSelect from "../../common/sortSelect"
import _ from "lodash"
import { useDispatch, useSelector } from "react-redux"
import { getCategoriesByCompany } from "../../../store/categories"
import { getProducts, loadProductsList } from "../../../store/products"

const ProductsListPage = ({ companyName }) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const products = useSelector(getProducts())
    const categories = useSelector(getCategoriesByCompany(companyName))

    const [currentPage, setCurrentPage] = useState(1)

    const [selectedCat, setSelectedCat] = useState()
    const [sortBy, setSortBy] = useState({ iter: "rusName", order: "asc" })

    useEffect(() => {
        setCurrentPage(1)
        dispatch(loadProductsList())
    }, [selectedCat])

    useEffect(() => {
        if (location.state) {
            const { selectedCatProp } = location.state
            setSelectedCat(selectedCatProp)
        } else {
            setSelectedCat(JSON.parse(localStorage.getItem("selectedCat")))
        }
    }, [])

    const pageSize = 9
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleCategorySelect = (item) => {
        localStorage.setItem("selectedCat", JSON.stringify(item))
        setSelectedCat(item)
    }

    const handleSort = (target) => {
        if (target.value === "") {
            setSortBy((prevState) => ({
                ...prevState,
                iter: "rusName",
                order: "asc"
            }))
        } else {
            setSortBy((prevState) => ({
                ...prevState,
                iter: target.name,
                order: target.value
            }))
        }
    }

    if (products) {
        const filteredProducts = selectedCat
            ? products.filter((product) => {
                  return (
                      JSON.stringify(product.category) ===
                      JSON.stringify(selectedCat._id)
                  )
              })
            : products
        const count = filteredProducts.length

        const sortedProducts = _.orderBy(
            filteredProducts,
            [sortBy.iter],
            [sortBy.order]
        )
        const productCrop = paginate(sortedProducts, currentPage, pageSize)
        return (
            <Container fluid>
                <SortSelect onSort={handleSort} />
                {categories && (
                    <Row>
                        <Col md={3}>
                            <h1 className="text-center m-0 mb-1">
                                {companyName === "gigi" ? "GIGI" : "JANSSEN"}
                            </h1>
                            <GroupList
                                selectedItem={selectedCat}
                                items={categories}
                                onItemSelect={handleCategorySelect}
                            />
                        </Col>

                        <Col md={8} className="ms-5 mt-3">
                            <Row>
                                <ProductsListCard products={productCrop} />
                            </Row>
                            <Row className="mt-5">
                                <PagesPagination
                                    itemsCount={count}
                                    pageSize={pageSize}
                                    currentPage={currentPage}
                                    onPageChange={handlePageChange}
                                />
                            </Row>
                        </Col>
                    </Row>
                )}
            </Container>
        )
    } else {
        return (
            <Container className="d-flex justify-content-center mt-4">
                <Spinner animation="border" variant="info" />
                <span className="mt-1 ms-2">Загрузка</span>
            </Container>
        )
    }
}

ProductsListPage.propTypes = {
    companyName: PropTypes.string,
    categoryId: PropTypes.string
}

export default ProductsListPage
