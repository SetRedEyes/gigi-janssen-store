import { useHistory } from "react-router-dom"
import React, { useState } from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { useClickOutside } from "../../../hooks/useClickOutside"
import { getItemsInCart } from "../../../store/cart"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import CartMenu from "./cartMenu"
import { ORDER_ROUTE, SHOP_ROUTE } from "../../../consts"

const CartButton = () => {
    const items = useSelector(getItemsInCart())
    const totalPrice = calcTotalPrice(items)
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()

    const goToOrder = () => {
        setIsOpen(false)
        history.push(SHOP_ROUTE + ORDER_ROUTE)
    }

    const domNode = useClickOutside(() => {
        setIsOpen(false)
    })
    return (
        <div className="cart-block me-5" ref={domNode}>
            {items.length > 0 && <div className="items-in-cart">{items.length}</div>}
            <Button
                variant={"outline-light"}
                className="navlink-btn cart-icon"
                onClick={() => setIsOpen((isOpen) => !isOpen)}
            >
                <i className="bi bi-cart"></i>
            </Button>

            {totalPrice > 0 ? (
                <span className="total-price">{totalPrice} грн.</span>
            ) : null}
            {isOpen && <CartMenu onClick={goToOrder} />}
        </div>
    )
}

export default CartButton
