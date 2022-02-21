import React from "react"
import { Button } from "react-bootstrap"
import PropTypes from "prop-types"

const volumeButton = ({ product, activeBtn, renderPrice }) => {
    return (
        <div className="d-flex justify-content-between mt-3">
            {product.volume.map((item, index) => (
                <Button
                    key={item}
                    variant="light"
                    className={`text-nowrap volume-btn ${
                        activeBtn === index ? "enableFocus " : "disableFocus"
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
