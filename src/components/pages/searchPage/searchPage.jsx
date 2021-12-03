import React, { useState, useEffect } from "react"
import query from "query-string"
import { useLocation } from "react-router-dom"
import { paginate } from "../../../utils/paginate"
import { Col, Container, Row, Spinner } from "react-bootstrap"
import GroupList from "../../common/groupList"
import PagesPagination from "../../common/pagination"
import ProductsListCard from "../../ui/productsListCard"
import api from "../../../api"
// import BreadCrumbs from "../../common/breadCrumbs"

const SearchPage = () => {
  const { search } = query.parse(useLocation().search)
  const [products, setProducts] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [categories, setCategories] = useState()

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    api.categories.fetchAll().then((data) => setCategories(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [])

  const handleCategorySelect = (item) => {
    localStorage.setItem("selectedCat", JSON.stringify(item))
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
    console.log(filteredProducts.length)
    const productCrop = paginate(filteredProducts, currentPage, pageSize)
    console.log(productCrop.length)
    return (
      <Container fluid>
        {/* <BreadCrumbs /> */}
        {categories && (
          <>
            <Row>
              <Col md={3} className="mt-2">
                <h1 className="text-center">GIGI</h1>
                <GroupList
                  items={categories.gigi}
                  onItemSelect={handleCategorySelect}
                />
              </Col>
              <Col md={{ offset: 1 }} className="mt-4 ms-4">
                <Row className="ms-3">
                  {productCrop.length > 0 ? (
                    <ProductsListCard products={productCrop} colSize={6} />
                  ) : (
                    <h1 className="text-center mt-5">
                      По Вашему запросу ({search}) ничего не найдено. Пожалуйста,
                      измените параметры поиска.
                    </h1>
                  )}
                </Row>
              </Col>

              <Col md={3} className="mt-1 ">
                <h1 className="text-center">Janssen</h1>
                <GroupList
                  items={categories.janssen}
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
          </>
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

export default SearchPage
