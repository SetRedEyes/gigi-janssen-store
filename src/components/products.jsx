import React, { useEffect, useState } from "react"
import { paginate } from "../utils/paginate"
import { Row, Col, Container } from "react-bootstrap"
import api from "../api"
import Product from "./product"
import PagesPagination from "./pagination"

const Products = () => {
  const [products, setProducts] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data))
  })
  const pageSize = 6
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }
  if (products) {
    const count = products.length
    const productCrop = paginate(products, currentPage, pageSize)
    return (
      <>
        <Container>
          <Row className="mt-2 me-5">
            <Col md={3}>
              <h1>dfsdfsdfs</h1>
            </Col>
            <Product products={productCrop} />
          </Row>
        </Container>
        <PagesPagination
          itemsCount={count}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

export default Products
