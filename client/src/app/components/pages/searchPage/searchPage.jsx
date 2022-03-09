import React, { useState, useEffect } from "react"
import { useLocation } from "react-router-dom"
import { useSelector } from "react-redux"
import { getCategoriesByCompany } from "../../../store/categories"
import { getProducts } from "../../../store/products"
import { paginate } from "../../../utils/paginate"
import query from "query-string"
import _ from "lodash"

import { Col, Container, Row } from "react-bootstrap"
import BreadCrumbs from "../../common/breadCrumbs"
import ProductsListCard from "../../ui/card/productsListCard"
import GroupList from "../../common/groupList"
import SortSelect from "../../common/sortSelect"
import PagesPagination from "../../common/pagination"
import LoadingSpinner from "../../common/loadingSpinner"

const SearchPage = () => {
    const { search } = query.parse(useLocation().search)
    const products = useSelector(getProducts())

    const gigiCats = useSelector(getCategoriesByCompany("gigi"))
    const janssenCats = useSelector(getCategoriesByCompany("janssen"))
    const [currentPage, setCurrentPage] = useState(1)
    const [sortBy, setSortBy] = useState({ iter: "rusName", order: "asc" })

    useEffect(() => {
        setCurrentPage(1)
    }, [])

    const handleCategorySelect = (item) => {
        localStorage.setItem("selectedCat", JSON.stringify(item))
    }

    const handleSort = (target) => {
        setSortBy((prevState) => ({
            ...prevState,
            iter: target.value === "" ? "rusName" : target.name,
            order: target.value
        }))
    }

    const pageSize = 6
    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    if (products) {
        const filteredProducts = search
            ? products.filter((product) => {
                  const name = `${product.name} ${product.rusName}`
                  return name.toLowerCase().includes(search.toLowerCase())
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
                <BreadCrumbs />
                <SortSelect onSort={handleSort} />
                <Row>
                    <Col className="mt-4" md={3}>
                        <h1 className="text-center m-0 mb-1">GIGI</h1>
                        <GroupList
                            items={{ ...gigiCats }}
                            onItemSelect={handleCategorySelect}
                        />
                    </Col>
                    <Col md={{ offset: 1 }} className="mt-3 ms-4">
                        {productCrop.length > 0 ? (
                            <Row className="ms-3">
                                <h5 className="text-center mb-4 ">
                                    Результаты поиска по запросу ({search})
                                </h5>
                                <ProductsListCard
                                    products={productCrop}
                                    colSize={6}
                                />
                            </Row>
                        ) : (
                            <h1 className="text-center mt-5 ">
                                По Вашему запросу ({search}) ничего не найдено.
                                Пожалуйста, измените параметры поиска.
                            </h1>
                        )}
                    </Col>

                    <Col md={3} className="mt-1">
                        <h1 className="text-center">Janssen</h1>
                        <GroupList
                            items={{ ...janssenCats }}
                            onItemSelect={handleCategorySelect}
                        />
                    </Col>
                </Row>
                <Row className="mt-5">
                    <PagesPagination
                        itemsCount={count}
                        pageSize={pageSize}
                        currentPage={currentPage}
                        onPageChange={handlePageChange}
                    />
                </Row>
            </Container>
        )
    } else {
        return <LoadingSpinner />
    }
}

export default SearchPage
