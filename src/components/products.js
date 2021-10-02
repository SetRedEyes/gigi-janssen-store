import React, { useEffect, useState } from "react"
import { Card, Row, Col, Container, Image } from "react-bootstrap"
import api from "../api"
import VolumePrice from "./volumePrice"
const Products = () => {
  const [products, setProducts] = useState()

  useEffect(() => {
    api.products.fetchAll().then((data) => setProducts(data))
  })

  if (products) {
    return (
      <Container>
        <Row className="mt-2">
          <Col md={3}>
            <h1>dfsdfsdfs</h1>
          </Col>
          <Col md={8}>
            <Row className="d-flex">
              {products.map((product) => (
                <Col key={product._id} md={4}>
                  <Card
                    className="mt-5"
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
        </Row>
      </Container>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

export default Products
