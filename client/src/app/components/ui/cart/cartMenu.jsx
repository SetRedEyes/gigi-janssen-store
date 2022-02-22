import React from "react"
import { useSelector } from "react-redux"
import { getItemsInCart } from "../../../store/cart"
import CartItem from "./cartItem"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import { Link } from "react-router-dom"
import { ORDER_ROUTE, SHOP_ROUTE } from "../../../consts"

const CartMenu = ({ onClick }) => {
    const items = useSelector(getItemsInCart())

    return (
        <>
            <div id="triangle"></div>

            <div className={!items.length ? "empty-cart-menu" : "cart-menu"}>
                <div className="cart-menu__products-list">
                    {items.length > 0 ? (
                        items.map((product) => (
                            <CartItem
                                product={product}
                                key={product._id + product.volume}
                                volumeId={product._id + product.volume}
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
                        <Link to={SHOP_ROUTE + ORDER_ROUTE}>
                            <Button className="order-btn" onClick={onClick}>
                                Оформить заказ
                            </Button>
                        </Link>
                    </div>
                ) : null}
            </div>
        </>
    )
}

CartMenu.propTypes = {
    onClick: PropTypes.func
}

export default CartMenu
