import React, { useEffect, useState } from "react"
import { paginate } from "../utils/paginate"
import { Row, Col, Container, Spinner } from "react-bootstrap"
import api from "../api"
import Product from "./product"
import PagesPagination from "./pagination"
import GroupList from "./groupList"

const Products = () => {
  const [products, setProducts] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [categories, setCategories] = useState()
  const [selectedCat, setSelectedCat] = useState()

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    api.categories.fetchAll().then((data) => setCategories(data))
  }, [currentPage])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCat])

  const pageSize = 6
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleCategorySelect = (item) => {
    setSelectedCat(item)
  }

  if (products) {
    const filteredProducts = selectedCat
      ? products.filter(
          (product) => JSON.stringify(product.category) === JSON.stringify(selectedCat)
        )
      : products
    const count = filteredProducts.length

    const productCrop = paginate(filteredProducts, currentPage, pageSize)
    return (
      <Container>
        {categories && (
          <Row className="mt-2 me-5">
            <Col md={3} className="mt-5">
              <GroupList
                selectedItem={selectedCat}
                items={categories}
                onItemSelect={handleCategorySelect}
              />
            </Col>

            <Col>
              <Row>
                <Product products={productCrop} />
              </Row>
            </Col>
          </Row>
        )}

        <Row className="mt-3 ms-5">
          <Col md={12} className="ms-3">
            <PagesPagination
              itemsCount={count}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </Col>
        </Row>
      </Container>
    )
  } else {
    return (
      <Container className="d-flex justify-content-center mt-4">
        <Spinner animation="border" variant="primary" />
        <span className="mt-1 ms-2">Загрузка</span>
      </Container>
    )
  }
}

export default Products
