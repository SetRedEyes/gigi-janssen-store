import React, { useState } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { getItemsInCart, itemAdded, itemRemoved } from "../../../store/cart"
import Price from "./priceButton"
import Volume from "./volumeButton.jsx"

const VolumePrice = ({ product }) => {
    const dispatch = useDispatch()
    const [selectedPrice, setSelectedPrice] = useState(null)
    const [activeBtn, setActiveBtn] = useState(0)
    const items = useSelector(getItemsInCart())
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
            dispatch(itemRemoved(product._id + selectedVolume))
        } else {
            dispatch(
                itemAdded({
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
VolumePrice.propTypes = {
    product: PropTypes.object.isRequired
}
export default VolumePrice
