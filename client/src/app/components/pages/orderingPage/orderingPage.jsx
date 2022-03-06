import React, { useEffect, useState } from "react"
import localStorageService from "../../../services/localStorage.service"
import { useSelector, useDispatch } from "react-redux"
import {
    addItemToCart,
    getCartItems,
    loadCartList,
    removeAllItems,
    removeItemFromCart
} from "../../../store/cart"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import { calculateItemsQuantity } from "../../../utils/calculateItemsQuantity"
import { enumerate } from "../../../utils/enumerate"

import { Button, Col, Container, Row } from "react-bootstrap"
import BackHistoryButton from "../../common/backButton"
import OrderItem from "../../ui/orderItem"
import OrderModal from "../../ui/orderModal"

const OrderingPage = () => {
    const dispatch = useDispatch()
    const [cartUpdate, setCartUpdate] = useState("")
    const [customerModal, setCustomerModal] = useState(false)

    const handleClose = () => setCustomerModal(false)
    const handleShow = () => setCustomerModal(true)

    const items = useSelector(getCartItems())
    const itemsQuantity = calculateItemsQuantity(items)

    useEffect(() => {
        dispatch(loadCartList())
    }, [cartUpdate])

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
        setCartUpdate({ ...cartUpdate })
    }

    const handleCartClear = () => {
        dispatch(removeAllItems())
    }

    if (items.length < 1) {
        return (
            <>
                <BackHistoryButton margin="m-4" />
                <h1 className="text-center mt-5">Ваша корзина пуста</h1>
            </>
        )
    }

    return (
        <Container className="order-page">
            <BackHistoryButton margin="mb-4" />
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
                    <Button onClick={handleShow} className="submit-btn w-100">
                        Купить
                    </Button>
                </Col>
            </Row>
            <OrderModal
                customerModal={customerModal}
                onClose={handleClose}
                onClear={handleCartClear}
            />
        </Container>
    )
}

export default OrderingPage
