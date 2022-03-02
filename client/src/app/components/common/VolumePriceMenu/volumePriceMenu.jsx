import React, { useState } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { addItemToCart, getCartItems, removeItemFromCart } from "../../../store/cart"

import Price from "./priceButton"
import Volume from "./volumeButton.jsx"

const VolumePriceMenu = ({ product }) => {
    const dispatch = useDispatch()
    const items = useSelector(getCartItems())
    const [selectedPrice, setSelectedPrice] = useState(null)
    const [activeBtn, setActiveBtn] = useState(0)

    const isItemInCart = items.some(
        (item) =>
            item._id === product._id && product.volume[activeBtn] === item.volume
    )

    const selectedVolume = product.volume[activeBtn]

    const renderPrice = (volumeIndex, product) => {
        setActiveBtn(volumeIndex)
        setSelectedPrice(product.price[volumeIndex])
    }

    const handleClick = (e) => {
        e.stopPropagation()
        if (isItemInCart) {
            dispatch(removeItemFromCart(product._id + selectedVolume))
        } else {
            dispatch(
                addItemToCart({
                    ...product,
                    price: product.price[activeBtn],
                    volume: selectedVolume,
                    volumeId: product._id + selectedVolume
                })
            )
        }
    }

    return (
        <>
            <Volume
                product={product}
                activeBtn={activeBtn}
                renderPrice={renderPrice}
            />
            <Price
                selectedPrice={selectedPrice}
                handleClick={handleClick}
                isItemInCart={isItemInCart}
                selectedVolume={selectedVolume}
                prices={product.price}
            />
        </>
    )
}
VolumePriceMenu.propTypes = {
    product: PropTypes.object.isRequired
}
export default VolumePriceMenu
