import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { getCategoriesByCompany } from "../../../store/categories"
import { getProductById } from "../../../store/products"

import { Col, Container, Row } from "react-bootstrap"
import GroupList from "../../../components/common/groupList"
import LoadingSpinner from "../../common/loadingSpinner"
import ProductInfoBlock from "../../ui/product/productInfoBlock"

const ProductPage = ({ productId, companyName }) => {
    const [selectedCat, setSelectedCat] = useState()
    const categories = useSelector(getCategoriesByCompany(companyName))
    const product = useSelector(getProductById(productId))

    useEffect(() => {
        setSelectedCat(JSON.parse(localStorage.getItem("selectedCat")))
    }, [])

    const handleCategorySelect = (item) => {
        localStorage.setItem("selectedCat", JSON.stringify(item))
        setSelectedCat(item)
    }

    if (product) {
        return (
            <Container fluid>
                {categories && (
                    <Row className="mt-5">
                        <Col md={3} className="mt-1">
                            <GroupList
                                selectedItem={selectedCat}
                                items={categories}
                                onItemSelect={handleCategorySelect}
                                companyName={companyName}
                            />
                        </Col>
                        <Col>
                            <ProductInfoBlock product={product} />
                        </Col>
                    </Row>
                )}
            </Container>
        )
    } else {
        return <LoadingSpinner />
    }
}

ProductPage.propTypes = {
    productId: PropTypes.string,
    companyName: PropTypes.string
}

export default ProductPage
