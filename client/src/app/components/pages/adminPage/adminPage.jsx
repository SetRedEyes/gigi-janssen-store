import React, { useEffect, useState } from "react"
import { Container } from "react-bootstrap"
import { getProducts } from "../../../store/products"
import ProductsTable from "../../ui/productsTable"
import { useSelector } from "react-redux"
import LoadingSpinner from "../../common/loadingSpinner"
import PagesPagination from "../../common/pagination"
import { paginate } from "../../../utils/paginate"
import _ from "lodash"

const adminPage = () => {
    const products = useSelector(getProducts())
    const [currentPage, setCurrentPage] = useState(1)
    const [sortBy, setSortBy] = useState({ iter: "name", order: "asc" })
    const pageSize = 9

    const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex)
    }

    const handleSort = (item) => {
        setSortBy(item)
    }
    useEffect(() => {
        setCurrentPage(1)
    }, [])

    if (products) {
        const count = products.length

        const sortedProducts = _.orderBy(products, [sortBy.iter], [sortBy.order])

        const productsCrop = paginate(sortedProducts, currentPage, pageSize)

        return (
            <Container fluid>
                {products.length > 0 && (
                    <ProductsTable
                        products={productsCrop}
                        onSort={handleSort}
                        currentSort={sortBy}
                    />
                )}
                <PagesPagination
                    itemsCount={count}
                    currentPage={currentPage}
                    onPageChange={handlePageChange}
                    pageSize={pageSize}
                />
            </Container>
        )
    } else {
        return <LoadingSpinner />
    }
}

export default adminPage
