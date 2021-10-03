import React from "react"
import VolumePrice from "./volumePrice"
import { Card, Col, Image, Row } from "react-bootstrap"
import PropTypes from "prop-types"

const Product = ({ products }) => {
  return (
    <Col md={8}>
      <Row className="d-flex">
        {products.map((product) => (
          <Col key={product._id} md={4} className="mt-5">
            <Card
              style={{ width: 250, cursor: "pointer" }}
              border={"light"}
            >
              <Image width={250} height={250} src={product.photo} />
              <Card.Body>
                <Card.Title style={{ height: 70 }}>
                  {product.name}
                </Card.Title>
                <Card.Subtitle
                  className="mb-2 text-muted"
                  style={{ height: 35 }}
                >
                  {product.rusName}
                </Card.Subtitle>

                <VolumePrice product={product} products={products} />
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  )
}
Product.propTypes = {
  products: PropTypes.array.isRequired
}
export default Product
