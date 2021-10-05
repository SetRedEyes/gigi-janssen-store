import React from "react"
import VolumePrice from "./volumePrice"
import { Card, Col, Image } from "react-bootstrap"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const Product = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Col key={product._id} md={4} className="mt-5">
          <Card style={{ width: 250, cursor: "pointer" }} border={"light"}>
            <Link to={`/product/${product._id}`}>
              <Image width={250} height={250} src={product.photo} />
            </Link>
            <Card.Body>
              <Link to={`/product/${product._id}`}>
                <Card.Title style={{ height: 70 }}>{product.name}</Card.Title>
              </Link>
              <Card.Subtitle className="mb-2 text-muted" style={{ height: 35 }}>
                {product.rusName}
              </Card.Subtitle>

              <VolumePrice product={product} products={products} />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}
Product.propTypes = {
  products: PropTypes.array.isRequired
}
export default Product
