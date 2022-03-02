import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCategoriesByCompany } from "../../../store/categories"
import { getProducts, loadProductsList } from "../../../store/products"
import { paginate } from "../../../utils/paginate"
import _ from "lodash"

import { Row, Col, Container } from "react-bootstrap"
import ProductsListCard from "../../ui/productsListCard"
import GroupList from "../../../components/common/groupList"
import SortSelect from "../../common/sortSelect"
import PagesPagination from "../../../components/common/pagination"
import LoadingSpinner from "../../common/loadingSpinner"

const ProductsListPage = ({ companyName }) => {
    const location = useLocation()
    const dispatch = useDispatch()
    const products = useSelector(getProducts())
    const categories = useSelector(getCategoriesByCompany(companyName))

    const [currentPage, setCurrentPage] = useState(1)
    const [selectedCat, setSelectedCat] = useState()
    const [sortBy, setSortBy] = useState({ iter: "rusName", order: "asc" })
    const pageSize = 9

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

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleCategorySelect = (item) => {
        localStorage.setItem("selectedCat", JSON.stringify(item))
        setSelectedCat(item)
    }

    const handleSort = (target) => {
        setSortBy((prevState) => ({
            ...prevState,
            iter: target.value === "" ? "rusName" : target.name,
            order: target.value
        }))
    }

    if (products) {
        const filteredProducts = selectedCat
            ? products.filter((product) => {
                  return (
                      JSON.stringify(product.category) ===
                      JSON.stringify(selectedCat.name)
                  )
              })
            : products
        const count = filteredProducts.length

        const sortedProducts = _.orderBy(filteredProducts, [sortBy.iter], [sortBy.order])
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
        return <LoadingSpinner />
    }
}

ProductsListPage.propTypes = {
    companyName: PropTypes.string
}

export default ProductsListPage
