import React, { useState } from "react"
import { Button, Card } from "react-bootstrap"
import PropTypes from "prop-types"

const VolumePrice = ({ product, products }) => {
  const [price, setPrice] = useState(null)

  const renderPrice = (volumeIndex, productId) => {
    const p = products.filter((product) => product._id === productId)
    if (volumeIndex === 1) {
      return setPrice(p[0].price[1])
    } else {
      return setPrice(p[0].price[0])
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
            className="me-3"
            onClick={() => renderPrice(index, product._id)}
            onMouseEnter={() => renderPrice(index, product._id)}
          >
            {item.name}
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
