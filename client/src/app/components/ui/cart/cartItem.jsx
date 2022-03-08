import React from "react"
import PropTypes from "prop-types"
import { useDispatch } from "react-redux"
import { removeItemFromCart } from "../../../store/cart"
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter"

import { Link } from "react-router-dom"
import DeleteButton from "../../common/deleteButton"

const CartItem = ({ product, volumeId }) => {
    const dispatch = useDispatch()

    const handleDelete = () => {
        dispatch(removeItemFromCart(volumeId))
    }

    return (
        <div className="cart-item">
            <Link
                className="d-flex flex-column link-in-cart"
                to={`/${product.companyName}/${product.category}/${product._id}`}
            >
                <span>
                    {`${capitalizeFirstLetter(product.companyName)} ${
                        product.name
                    } `}
                </span>
                <span>{`Объем: ${product.volume} мл.`} </span>
                <span>{`Количество: ${product.count}`} </span>
            </Link>

            <div className="cart-item__price">
                <span className="me-2">{product.price} грн.</span>
                <DeleteButton size="sm" onClick={handleDelete} />
            </div>
        </div>
    )
}

CartItem.propTypes = {
    volumeId: PropTypes.string,
    product: PropTypes.object
}

export default CartItem
