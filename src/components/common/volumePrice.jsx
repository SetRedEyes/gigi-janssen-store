import React, { useState } from "react"
import { Button, Card } from "react-bootstrap"
import PropTypes from "prop-types"

const VolumePrice = ({ product }) => {
    const [price, setPrice] = useState(null)
    const [activeBtn, setActiveBtn] = useState(0)

    const renderPrice = (volumeIndex, product) => {
        if (volumeIndex === 0) {
            setActiveBtn(volumeIndex)
            setPrice(product.price[0])
        } else if (volumeIndex === 1) {
            setActiveBtn(volumeIndex)
            setPrice(product.price[1])
        }
    }

    return (
        <>
            <div className="d-flex justify-content-between mt-3">
                {product.volume.map((item, index) => (
                    <Button
                        key={item}
                        variant="light"
                        className={`text-nowrap ${
                            (activeBtn === 0 && index === 0) ||
                            (activeBtn === 1 && index === 1)
                                ? "enableFocus"
                                : "disableFocus"
                        }`}
                        onClick={() => renderPrice(index, product)}
                        onMouseEnter={() => renderPrice(index, product)}
                    >
                        {`${item} мл`}
                    </Button>
                ))}
            </div>
            <div className="d-flex align-items-end justify-content-between mt-4">
                <Card.Title>
                    {!price || product.price.length === 1
                        ? `${product.price[0]} грн`
                        : `${price} грн`}
                </Card.Title>
                <Button className="buyBtn">Купить</Button>
            </div>
        </>
    )
}
VolumePrice.propTypes = {
    product: PropTypes.object.isRequired
}
export default VolumePrice
