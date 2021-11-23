import React, { useState } from "react"
import { Button, Card } from "react-bootstrap"
import PropTypes from "prop-types"

const VolumePrice = ({ product, products }) => {
  const [price, setPrice] = useState(null)
  const [activeBtn, setActiveBtn] = useState(0)

  const renderPrice = (volumeIndex, productId) => {
    const p = products.filter((product) => product._id === productId)
    if (volumeIndex === 0) {
      setActiveBtn(volumeIndex)
      setPrice(p[0].price[0])
    } else if (volumeIndex === 1) {
      setActiveBtn(volumeIndex)
      setPrice(p[0].price[1])
    }
  }

  return (
    <>
      <div className="d-flex justify-content-between mt-3">
        {product.volume.map((item, index) => (
          <Button
            key={item._id}
            variant="light"
            className={`text-nowrap ${
              (activeBtn === 0 && index === 0) || (activeBtn === 1 && index === 1)
                ? "enableFocus"
                : "disableFocus"
            }`}
            onClick={() => renderPrice(index, product._id)}
            onMouseEnter={() => renderPrice(index, product._id)}
          >
            {`${item.name} мл`}
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
  product: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
}
export default VolumePrice
