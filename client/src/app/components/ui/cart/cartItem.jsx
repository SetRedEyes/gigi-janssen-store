import React from "react"
import { useDispatch } from "react-redux"
import DeleteButton from "../../common/deleteButton"
import PropTypes from "prop-types"
import { itemRemoved } from "../../../store/cart"

const CartItem = ({ title, price, volume, id }) => {
    const dispatch = useDispatch()
    const handleDeleteClick = () => {
        dispatch(itemRemoved(id))
    }

    return (
        <div className="cart-item">
            <span>{title} </span>
            <span>Объем:{volume} </span>

            <div className="cart-item__price">
                <span>{price} грн.</span>
                <DeleteButton onClick={handleDeleteClick} />
            </div>
        </div>
    )
}

CartItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    volume: PropTypes.string
}

export default CartItem
