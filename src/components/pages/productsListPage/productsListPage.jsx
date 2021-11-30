import React, { useEffect, useState } from "react"
import { paginate } from "../../../utils/paginate"
import { Row, Col, Container, Spinner } from "react-bootstrap"
import api from "../../../api"
import PagesPagination from "../../../components/common/pagination"
import GroupList from "../../../components/common/groupList"
import ProductsListCard from "../../../ui/productsListCard"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"

const ProductsListPage = ({ companyId, categoryId }) => {
  const location = useLocation()
  const [products, setProducts] = useState()
  const [currentPage, setCurrentPage] = useState(1)
  const [categories, setCategories] = useState()
  const [selectedCat, setSelectedCat] = useState()

  useEffect(() => {
    api.categories.getByCompany(companyId).then((data) => setCategories(data))
  }, [currentPage])

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data))
  }, [])

  useEffect(() => {
    setCurrentPage(1)
  }, [selectedCat])

  useEffect(() => {
    if (location.state) {
      const { selectedCatProp } = location.state
      setSelectedCat(selectedCatProp)
    }
  }, [])

  const pageSize = 9
  const handlePageChange = (pageIndex) => {
    setCurrentPage(pageIndex)
  }

  const handleCategorySelect = (item) => {
    setSelectedCat(item)
  }

  if (products) {
    const filteredProducts = selectedCat
      ? products.filter((product) => {
          return JSON.stringify(product.category) === JSON.stringify(selectedCat)
        })
      : products
    const count = filteredProducts.length

    const productCrop = paginate(filteredProducts, currentPage, pageSize)
    return (
      <Container fluid>
        {categories && (
          <Row className="me-5">
            <Col md={3} className="mt-4">
              <GroupList
                selectedItem={selectedCat}
                items={categories}
                onItemSelect={handleCategorySelect}
              />
            </Col>

            <Col md={8} className="ms-5 mt-2">
              <Row>
                <ProductsListCard
                  products={productCrop}
                  companyId={companyId}
                  categoryId={categoryId}
                />
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
  companyId: PropTypes.string,
  categoryId: PropTypes.string
}

export default ProductsListPage
