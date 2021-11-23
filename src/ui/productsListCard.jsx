import React from "react"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"
import { Card, Col, Image } from "react-bootstrap"
import VolumePrice from "../components/volumePrice"

const ProductsListCard = ({ products }) => {
  return (
    <>
      {products.map((product) => (
        <Col key={product._id} md={4} className="mt-5">
          <Card style={{ width: "18rem", border: "none" }} border={"light"}>
            <Card.Subtitle className="text-muted mb-1 text-center">
              {product.rusName}
            </Card.Subtitle>
            <Link to={`/product/${product._id}`}>
              <Image
                style={{ width: "18rem", height: "14rem" }}
                src={product.photo}
              />
            </Link>
            <Card.Body>
              <Link
                className="text-decoration-none text-center link"
                to={`/product/${product._id}`}
              >
                <Card.Title style={{ height: "4rem" }}>{product.name}</Card.Title>
              </Link>

              <VolumePrice product={product} products={products} />
            </Card.Body>
          </Card>
        </Col>
      ))}
    </>
  )
}

ProductsListCard.propTypes = {
  products: PropTypes.array.isRequired
}
export default ProductsListCard
