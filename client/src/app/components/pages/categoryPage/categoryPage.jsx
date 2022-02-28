import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import {
    getCategoriesByCompany,
    getCategoriesLoadingStatus
} from "../../../store/categories"

import { Col, Container, Row } from "react-bootstrap"
import LoadingSpinner from "../../common/loadingSpinner"
import CategoryCard from "../../ui/categoryCard"

const CategoryPage = ({ companyName }) => {
    const categories = useSelector(getCategoriesByCompany(companyName))
    const categoriesLoading = useSelector(getCategoriesLoadingStatus())
    if (categoriesLoading) return <LoadingSpinner />
    return (
        <Container className="d-flex">
            <Row className="mt-2">
                {Object.keys(categories).map((cat) => (
                    <Col md={3} key={categories[cat]._id}>
                        <CategoryCard
                            fullName={categories[cat].fullName}
                            categoryName={categories[cat].name}
                            photo={categories[cat].photo}
                            companyName={companyName}
                            catObj={categories[cat]}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    )
}

CategoryPage.propTypes = {
    companyName: PropTypes.string
}

export default CategoryPage
