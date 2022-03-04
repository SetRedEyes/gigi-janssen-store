import React from "react"
import PropTypes from "prop-types"
import { Button } from "react-bootstrap"

const volumeButton = ({ product, activeBtn, renderPrice }) => {
    return (
        <div className="flex-between mt-3">
            {product.volume.map((item, index) => (
                <Button
                    key={item}
                    variant="light"
                    className={`volume-btn ${
                        activeBtn === index ? "enableFocus" : "disableFocus"
                    }`}
                    onClick={() => renderPrice(index, product)}
                    onMouseEnter={() => renderPrice(index, product)}
                >
                    {`${item} мл`}
                </Button>
            ))}
        </div>
    )
}

volumeButton.propTypes = {
    product: PropTypes.object,
    activeBtn: PropTypes.number,
    renderPrice: PropTypes.func
}
export default volumeButton
