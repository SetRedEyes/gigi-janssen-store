import { useHistory } from "react-router-dom"
import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { useClickOutside } from "../../../hooks/useClickOutside"
import { getCartItems, loadCartList } from "../../../store/cart"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import CartMenu from "./cartMenu"
import { ORDER_ROUTE, SHOP_ROUTE } from "../../../consts"

const CartButton = () => {
    const dispatch = useDispatch()
    const items = useSelector(getCartItems())
    const totalPrice = calcTotalPrice(items)
    const [isOpen, setIsOpen] = useState(false)
    const history = useHistory()

    useEffect(() => {
        dispatch(loadCartList())
    }, [totalPrice])

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
