// import React, { useState, useCallback } from "react";
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { BiCartAlt } from "react-icons/bi";
// import { CartMenu } from "../cart-menu";
// import { ItemsInCart } from "../items-in-cart";
// import { calcTotalPrice } from '../utils';
// import "./cart-block.css";

import React, { useState } from "react"

export const CartBlock = () => {
    const [isCartMenuVisible, setIsCartMenuVisible] = useState(false)
    // const items = useSelector((state) => state.cart.itemsInCart)
    // const history = useHistory()
    // const totalPrice = calcTotalPrice(items)
    // const handleGoToOrderClick = useCallback(() => {
    //     setIsCartMenuVisible(false)
    //     history.push("/order")
    // }, [history])

    return (
        <div className="cart-block">
            {items.length > 0 && (
                <div className="items-in-cart">{items.length} </div>
            )}

            <BiCartAlt
                color="white"
                size={25}
                className="cart-icon"
                onClick={() => setIsCartMenuVisible(!isCartMenuVisible)}
            />
            {totalPrice > 0 ? (
                <span className="total-price">{totalPrice} руб.</span>
            ) : null}
            {isCartMenuVisible && <CartMenu onClick={handleGoToOrderClick} />}
        </div>
    )
}
