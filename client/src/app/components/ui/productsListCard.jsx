import React from "react"
import PropTypes from "prop-types"
import { SHOP_ROUTE } from "../../consts"

import { Link } from "react-router-dom"
import { Card, Col, Image } from "react-bootstrap"
import VolumePriceMenu from "../common/VolumePriceMenu"

const ProductsListCard = ({ products, colSize }) => {
    return (
        <>
            {products.map((product) => (
                <Col key={product._id} md={colSize} className="mb-5">
                    <Card style={{ width: "18rem", border: "none" }}>
                        <Card.Subtitle className="text-muted pt-2 mb-1 text-center">
                            {product.rusName}
                        </Card.Subtitle>
                        <Link
                            to={
                                SHOP_ROUTE + `/${product.companyName}/${product.category}/${product._id}`
                            }
                        >
                            <Image
                                style={{ width: "18rem", height: "14rem" }}
                                src={product.photo}
                            />
                        </Link>
                        <Card.Body>
                            <Link
                                className="link-title text-center"
                                to={
                                    SHOP_ROUTE + `/${product.companyName}/${product.category}/${product._id}`
                                }
                            >
                                <Card.Title style={{ height: "4rem" }}>
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
