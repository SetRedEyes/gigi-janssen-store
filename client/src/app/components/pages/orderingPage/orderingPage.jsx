import React, { useEffect, useState } from "react"
import localStorageService from "../../../services/localStorage.service"
import { useSelector, useDispatch } from "react-redux"
import { addItemToCart, getCartItems, loadCartList, removeItemFromCart } from "../../../store/cart"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import { calculateItemsQuantity } from "../../../utils/calculateItemsQuantity"
import { enumerate } from "../../../utils/enumerate"

import { Button, Col, Container, Row } from "react-bootstrap"
import BackHistoryButton from "../../common/backButton"
import OrderItem from "../../ui/orderItem"

const OrderingPage = () => {
    const dispatch = useDispatch()
    const [state, setState] = useState("")

    const items = useSelector(getCartItems())
    const itemsQuantity = calculateItemsQuantity(items)

    useEffect(() => {
        dispatch(loadCartList())
    }, [state])

    const handleDelete = (volumeId) => {
        dispatch(removeItemFromCart(volumeId))
    }

    const handleQuantityChange = (e, product) => {
        const cart = localStorageService.getCartItems()
        cart.forEach((item) => {
            if (item.volumeId === product.volumeId) {
                item.count = e.target.value
                item.totalPrice = item.price * item.count
            }
        })

        localStorage.setItem("cart", JSON.stringify(cart))
        dispatch(addItemToCart(...cart))
        setState({ ...state })
    }

    if (items.length < 1) {
        return <h1 className="text-center mt-5">Ваша корзина пуста</h1>
    }

    return (
        <Container className="order-page">
            <BackHistoryButton mb="mb-4" />
            {items.map((product) => (
                <OrderItem
                    onQuantityChange={handleQuantityChange}
                    onDelete={handleDelete}
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
                    <Button className="submit-btn w-100">
                        Купить
                    </Button>
                </Col>
            </Row>
        </Container>
    )
}

export default OrderingPage
