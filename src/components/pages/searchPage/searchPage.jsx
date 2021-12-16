import React, { useState, useEffect } from "react"
import query from "query-string"
import { useLocation } from "react-router-dom"
import { paginate } from "../../../utils/paginate"
import { Col, Container, Row } from "react-bootstrap"
import GroupList from "../../common/groupList"
import PagesPagination from "../../common/pagination"
import ProductsListCard from "../../ui/productsListCard"
import BreadCrumbs from "../../common/breadCrumbs"
import _ from "lodash"
import SortSelect from "../../common/sortSelect"
import { useProduct } from "../../../hooks/useProducts"
import { useCategory } from "../../../hooks/useCategory"

const SearchPage = () => {
  const { search } = query.parse(useLocation().search)
  const { products } = useProduct()
  const gigi = useCategory().getCategoriesByCompany("gigi")
  const janssen = useCategory().getCategoriesByCompany("janssen")
  const [currentPage, setCurrentPage] = useState(1)
  const [sortBy, setSortBy] = useState({ iter: "rusName", order: "asc" })

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  const handleCategorySelect = (item) => {
    localStorage.setItem("selectedCat", JSON.stringify(item))
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

    const sortedProducts = _.orderBy(filteredProducts, [sortBy.iter], [sortBy.order])
    const productCrop = paginate(sortedProducts, currentPage, pageSize)
    return (
      <Container fluid>
        <BreadCrumbs />
        <SortSelect onSort={handleSort} />
        <Row>
          <Col md={3}>
            <h1 className="text-center m-0 mb-1">GIGI</h1>
            <GroupList items={{ ...gigi }} onItemSelect={handleCategorySelect} />
          </Col>
          <Col md={{ offset: 1 }} className="mt-3 ms-4">
            {productCrop.length > 0 ? (
              <Row className="ms-3">
                <h5 className="text-center mb-4 ">
                  Результаты поиска по запросу ({search})
                </h5>
                <ProductsListCard products={productCrop} colSize={6} />
              </Row>
            ) : (
              <h1 className="text-center mt-5 ">
                По Вашему запросу ({search}) ничего не найдено. Пожалуйста, измените
                параметры поиска.
              </h1>
            )}
          </Col>

          <Col md={3} className="mt-1 ">
            <h1 className="text-center">Janssen</h1>
            <GroupList items={{ ...janssen }} onItemSelect={handleCategorySelect} />
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
  }
}

export default SearchPage
