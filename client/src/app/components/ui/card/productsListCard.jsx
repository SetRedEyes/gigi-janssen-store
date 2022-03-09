import React from "react"
import PropTypes from "prop-types"

import { Link } from "react-router-dom"
import { Card, Col, Image } from "react-bootstrap"
import VolumePriceMenu from "../../common/VolumePriceMenu"

const ProductsListCard = ({ products, colSize }) => {
    return (
        <>
            {products.map((product) => (
                <Col key={product._id} md={colSize} className="mb-5">
                    <Card className="productList-card">
                        <Card.Subtitle className="productList-card__subtitle">
                            {product.rusName}
                        </Card.Subtitle>
                        <Link
                            to={`/${product.companyName}/${product.category}/${product._id}`}
                        >
                            <Image
                                className="productList-card__img"
                                src={product.photo}
                            />
                        </Link>
                        <Card.Body>
                            <Link
                                className="link-title text-center"
                                to={`/${product.companyName}/${product.category}/${product._id}`}
                            >
                                <Card.Title style={{ height: "3rem" }}>
                                    {product.name}
                                </Card.Title>
                            </Link>
                            <VolumePriceMenu product={product} />
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </>
    )
}

ProductsListCard.defaultProps = { colSize: 4 }

ProductsListCard.propTypes = {
    products: PropTypes.array.isRequired,
    companyName: PropTypes.string,
    colSize: PropTypes.number
}

export default ProductsListCard
