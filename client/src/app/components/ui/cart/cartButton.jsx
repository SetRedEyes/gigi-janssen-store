import React, { useEffect, useState } from "react"
import { useClickOutside } from "../../../hooks/useClickOutside"
import { useHistory } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { getCartItems, loadCartList } from "../../../store/cart"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import { ORDER_ROUTE } from "../../../consts"

import { Button } from "react-bootstrap"
import CartMenu from "./cartMenu"

const CartButton = () => {
    const history = useHistory()
    const dispatch = useDispatch()
    const items = useSelector(getCartItems())
    const totalPrice = items.length && calcTotalPrice(items)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        dispatch(loadCartList())
    }, [totalPrice])

    const goToOrder = () => {
        setIsOpen(false)
        history.push(ORDER_ROUTE)
    }

    const domNode = useClickOutside(() => {
        setIsOpen(false)
    })
    return (
        <div className="cart-block" ref={domNode}>
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
