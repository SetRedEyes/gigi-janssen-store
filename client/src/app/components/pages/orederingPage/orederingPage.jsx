import React from "react"
import { Container, Image } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getItemsInCart, itemRemoved } from "../../../store/cart"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter"
import { enumerate } from "../../../utils/enumerate"
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
            <div className="order-page__left">
                {items.map((product) => (
                    <div className="order-item" key={product.volumeId}>
                        <div className="me-5">
                            <Image
                                className="m-4"
                                src={product.photo}
                                fluid
                                style={{ width: "6rem", height: "6rem" }}
                            />
                        </div>
                        <span className="order-item__title">
                            {`${capitalizeFirstLetter(product.companyName)} ${
                                product.name
                            } - ${product.rusName}`}
                        </span>
                        <span className="order-item__price">
                            {product.price} руб.
                        </span>
                        <DeleteButton
                            // className="cart-item__delete-icon"
                            size="lg"
                            onClick={() => handleDelete(product.volumeId)}
                        />
                    </div>
                ))}
            </div>
            <div className="order-page__right">
                <div className="order-page__total-price">
                    <span>
                        {items.length}
                        {enumerate(items.length, ["товар", "товара", "товаров"])} на
                        сумму {calcTotalPrice(items)} грн.
                    </span>
                </div>
            </div>
        </Container>
    )
}

export default OrderingPage
