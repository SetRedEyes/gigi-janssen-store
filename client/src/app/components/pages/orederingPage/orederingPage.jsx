import React from "react"
import { Button, Col, Container, Image, Row } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { SHOP_ROUTE } from "../../../consts"
import { getItemsInCart, itemRemoved } from "../../../store/cart"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter"
import { enumerate } from "../../../utils/enumerate"
import BackHistoryButton from "../../common/backButton"
import DeleteButton from "../../common/deleteButton"

const OrderingPage = () => {
    const items = useSelector(getItemsInCart())
    const dispatch = useDispatch()
    const handleDelete = (volumeId) => {
        dispatch(itemRemoved(volumeId))
    }

    console.log(items)
    if (items.length < 1) {
        return <h1 className="text-center mt-5">Ваша корзина пуста</h1>
    }

    return (
        <Container className="order-page">
            <BackHistoryButton mb="mb-4" />
            {items.map((product) => (
                <Row key={product.volumeId} className="cart-item">
                    <Col md={1}>
                        <Link
                            to={
                                SHOP_ROUTE +
                                `/${product.companyName}/${product.category}/${product._id}`
                            }
                        >
                            <Image
                                className="order-item_image"
                                src={product.photo}
                            />
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
                            <span className="order-item__title">
                                {`${capitalizeFirstLetter(product.companyName)} ${
                                    product.name
                                } - ${product.rusName} `}
                            </span>
                            <span className="order-item__volume">
                                Объем: {product.volume} мл.
                            </span>
                        </Link>
                    </Col>
                    <Col
                        md={{ span: 2, offset: 1 }}
                        className="d-flex justify-content-between align-items-center"
                    >
                        <span className="order-item__price ">
                            {product.price} грн.
                        </span>
                        <DeleteButton
                            size="lg"
                            onClick={() => handleDelete(product.volumeId)}
                        />
                    </Col>
                </Row>
            ))}
            <Row className="order-page__total-price ">
                <hr />
                <Col md={8}>
                    <h1>Итого:</h1>
                    <h4>
                        {items.length}{" "}
                        {enumerate(items.length, ["товар", "товара", "товаров"])} на
                        сумму {calcTotalPrice(items)} грн.
                    </h4>
                </Col>
                <Col md={2}>
                    <Button className="btn btn-primary submit-btn w-100 m-auto">
                        Купить
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderingPage
