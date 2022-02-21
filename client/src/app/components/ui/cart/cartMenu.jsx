import React from "react"
import { useSelector } from "react-redux"
import { getItemsInCart } from "../../../store/cart"
import CartItem from "./cartItem"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter"

const CartMenu = ({ onClick }) => {
    const items = useSelector(getItemsInCart())

    return (
        <div className="cart-menu">
            <div className="cart-menu__products-list">
                {items.length > 0 ? (
                    items.map((product) => (
                        <CartItem
                            key={product._id + product.volume}
                            photo={product.photo}
                            price={product.price}
                            title={`${capitalizeFirstLetter(product.companyName)} ${
                                product.name
                            } `}
                            id={product._id + product.volume}
                            volume={product.volume}
                        />
                    ))
                ) : (
                    <span className="d-flex  justify-content-center">
                        Корзина пуста
                    </span>
                )}
            </div>
            {items.length > 0 ? (
                <div className="cart-menu__arrange">
                    <div className="cart-menu__total-price">
                        <span>Итого:</span>
                        <span>{calcTotalPrice(items)} грн.</span>
                    </div>
                    <Button className="order-btn" onClick={onClick}>
                        Оформить заказ
                    </Button>
                </div>
            ) : null}
        </div>
    )
}

CartMenu.propTypes = {
    onClick: PropTypes.func
}

export default CartMenu
