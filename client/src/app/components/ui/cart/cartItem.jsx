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
            <div className="d-flex flex-column">
                <span>{title}</span>
                <span>{`Объем: ${volume}`} </span>
            </div>

            <div className="cart-item__price">
                <span className="me-2">{price} грн.</span>
                <DeleteButton size="sm" onClick={handleDeleteClick} />
            </div>
        </div>
    )
}

CartItem.propTypes = {
    title: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
    volume: PropTypes.number
}

export default CartItem
