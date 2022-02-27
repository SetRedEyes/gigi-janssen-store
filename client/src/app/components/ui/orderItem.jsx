import React from "react"
import { Col, Image, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import { SHOP_ROUTE } from "../../consts"
import { capitalizeFirstLetter } from "../../utils/capitalizeFirstLetter"
import PropTypes from "prop-types"
import DeleteButton from "../common/deleteButton"

const OrderItem = ({ product, onDelete, onQuantityChange }) => {
    return (
        <Row className="cart-item">
            <Col md={1}>
                <Link
                    to={
                        SHOP_ROUTE +
                        `/${product.companyName}/${product.category}/${product._id}`
                    }
                >
                    <Image className="order-item_image" src={product.photo} />
                </Link>
            </Col>

            <Col md={7}>
                <Link
                    className="d-flex flex-column link-title"
                    to={
                        SHOP_ROUTE +
                        `/${product.companyName}/${product.category}/${product._id}`
                    }
                >
                    <span className="order-item__title ">
                        {`${capitalizeFirstLetter(product.companyName)} ${
                            product.name
                        } - ${product.rusName} `}
                    </span>
                </Link>

                <span className="order-item__options ">
                    Объем: {product.volume} мл.
                </span>
                <br />
                <span className="order-item__options text-end">
                    Количество:{" "}
                    <input
                        type="number"
                        defaultValue={product.count}
                        min="1"
                        max="100"
                        onChange={(e) => onQuantityChange(e, product)}
                    />
                </span>
            </Col>

            <Col
                md={{ span: 2, offset: 1 }}
                className="d-flex justify-content-between align-items-center"
            >
                <span className="order-item__price">{product.totalPrice} грн.</span>
                <DeleteButton size="lg" onClick={() => onDelete(product.volumeId)} />
            </Col>
        </Row>
    )
}

OrderItem.propTypes = {
    product: PropTypes.object,
    onDelete: PropTypes.func,
    onQuantityChange: PropTypes.func
}
export default OrderItem
