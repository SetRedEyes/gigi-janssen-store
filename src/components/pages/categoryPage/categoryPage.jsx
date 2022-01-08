import React from "react"
import { Col, Container, Row } from "react-bootstrap"
import CategoryCard from "../../ui/categoryCard"
import PropTypes from "prop-types"
import { useCategory } from "../../../hooks/useCategory"

const CategoryPage = ({ companyId }) => {
    const categories = useCategory().getCategoriesByCompany(companyId)

    return (
        <Container className="d-flex">
            <Row className="mt-2">
                {Object.keys(categories).map((cat) => (
                    <Col md={3} key={categories[cat]._id}>
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
}

CategoryPage.propTypes = {
    companyId: PropTypes.string
}

export default CategoryPage
