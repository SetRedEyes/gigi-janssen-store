import React, { useState, useEffect } from "react"
import { Col, Container, Row, Spinner } from "react-bootstrap"
import api from "../../api"
import CategoryCard from "../../ui/categoryCard"
import PropTypes from "prop-types"

const CategoryPage = ({ companyId }) => {
  const [categories, setCategory] = useState()
  useEffect(() => {
    api.categories.getByCompany(companyId).then((data) => setCategory(data))
  }, [])

  if (companyId && categories) {
    return (
      <Container className="d-flex">
        <Row className="mt-2">
          {Object.keys(categories).map((cat) => (
            <Col key={categories[cat]._id}>
              <CategoryCard
                name={categories[cat].name}
                categoryId={categories[cat]._id}
                photo={categories[cat].photo}
                companyId={companyId}
                catObj={categories[cat]}
              />
            </Col>
          ))}
        </Row>
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

CategoryPage.propTypes = {
  companyId: PropTypes.string
}

export default CategoryPage
