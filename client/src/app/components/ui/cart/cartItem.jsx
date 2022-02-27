import React from "react"
import { Link } from "react-router-dom"

import { useDispatch } from "react-redux"
import DeleteButton from "../../common/deleteButton"
import PropTypes from "prop-types"
import { SHOP_ROUTE } from "../../../consts"
import { removeItemFromCart } from "../../../store/cart"
import { capitalizeFirstLetter } from "../../../utils/capitalizeFirstLetter"

const CartItem = ({ product, volumeId }) => {
    const dispatch = useDispatch()
    const handleDelete = () => {
        dispatch(removeItemFromCart(volumeId))
    }

    return (
        <div className="cart-item">
            <Link
                className="d-flex flex-column link-in-cart"
                to={
                    SHOP_ROUTE +
                    `/${product.companyName}/${product.category}/${product._id}`
                }
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
