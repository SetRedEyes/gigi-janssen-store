import React from "react"
import PropTypes from "prop-types"
import { Card } from "react-bootstrap"

const priceButton = ({
    selectedPrice,
    prices,
    handleClick,
    isItemInCart,
    selectedVolume
}) => {
    return (
        <div className="d-flex align-items-end justify-content-between mt-4">
            <Card.Title>
                {!selectedPrice || prices.length === 1
                    ? `${prices[0]} грн`
                    : `${selectedPrice} грн`}
            </Card.Title>
            <div
                role="button"
                onClick={handleClick}
                className={
                    isItemInCart && selectedVolume ? "grey-btn" : "action-btn"
                }
            >
                {isItemInCart && selectedVolume ? "Убрать из корзины" : "В Корзину"}
            </div>
        </div>
    )
}

priceButton.propTypes = {
    selectedPrice: PropTypes.number,
    prices: PropTypes.array,
    handleClick: PropTypes.func,
    isItemInCart: PropTypes.bool,
    selectedVolume: PropTypes.number
}
export default priceButton
