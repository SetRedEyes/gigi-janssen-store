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
      <Card.Text>
        {!price || product.price.length === 1
          ? `${product.price[0]} грн`
          : `${price} грн`}
      </Card.Text>
      <div className="d-flex ">
        {product.volume.map((item, index) => (
          <Button
            key={item._id}
            variant="outline-primary"
            className={`me-3 text-nowrap ${
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

        <Button className="ms-auto p-2" variant="primary">
          Купить
        </Button>
      </div>
    </>
  )
}
VolumePrice.propTypes = {
  product: PropTypes.object.isRequired,
  products: PropTypes.array.isRequired
}
export default VolumePrice
