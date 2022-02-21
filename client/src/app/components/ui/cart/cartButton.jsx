// import React, { useState, useCallback } from "react";
// import { useSelector } from "react-redux";
// import { useHistory } from "react-router-dom";
// import { BiCartAlt } from "react-icons/bi";
// import { CartMenu } from "../cart-menu";
// import { ItemsInCart } from "../items-in-cart";
// import { calcTotalPrice } from '../utils';
// import "./cart-block.css";

import React from "react"
import { Button } from "react-bootstrap"
import { useSelector } from "react-redux"
import { getItemsInCart } from "../../../store/cart"
import { calcTotalPrice } from "../../../utils/calcTotalPrice"
import CartMenu from "./cartMenu"

const CartButton = () => {
    const items = useSelector(getItemsInCart())
    const totalPrice = calcTotalPrice(items)
    return (
        <div className="cart-block me-5">
            <Button variant={"outline-light"} className="navlink-btn cart-icon">
                <i className="bi bi-cart"></i>
            </Button>

            {totalPrice > 0 ? (
                <span className="total-price">{totalPrice} грн.</span>
            ) : null}
            <CartMenu onClick={() => null} />
        </div>
    )
}

export default CartButton
