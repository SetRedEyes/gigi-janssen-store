import React from "react"
import { Button, Col, Container, Row } from "react-bootstrap"
import { useSelector } from "react-redux"
import { getCartItems } from "../../../store/cart"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import { calculateItemsQuantity } from "../../../utils/calculateItemsQuantity"
import { enumerate } from "../../../utils/enumerate"
import BackHistoryButton from "../../common/backButton"
import OrderItem from "../../ui/orderItem"

const OrderingPage = () => {
    const items = useSelector(getCartItems())
    const itemsQuantity = calculateItemsQuantity(items)

    if (items.length < 1) {
        return <h1 className="text-center mt-5">Ваша корзина пуста</h1>
    }

    return (
        <Container className="order-page">
            <BackHistoryButton mb="mb-4" />
            {items.map((product) => (
                <OrderItem
                    key={product.volumeId}
                    product={product}
                    price={product.price}
                />
            ))}
            <Row className="order-page__total-price">
                <hr />
                <Col md={8}>
                    <h1>Итого:</h1>
                    <h4>
                        {calculateItemsQuantity(items)}{" "}
                        {enumerate(itemsQuantity, ["товар", "товара", "товаров"])} на
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
