import React, { useEffect, useState } from "react"
import { Container, Spinner } from "react-bootstrap"
import { useParams } from "react-router-dom"
import api from "../api"

const ProductPage = () => {
  const params = useParams()
  const { productId } = params
  // const history = useHistory()
  const [product, setProduct] = useState(null)

  // const handleClick = () => {
  //   history.push("/")
  // }
  useEffect(() => {
    api.products.getById(productId).then((data) => setProduct(data))
  }, [])

  if (product) {
    return <Container>{`${product.name} ${productId}`}</Container>
  } else {
    return (
      <Container className="d-flex justify-content-center mt-4">
        <Spinner animation="border" variant="primary" />
        <span className="mt-1 ms-2">Загрузка</span>
      </Container>
    )
  }
}

export default ProductPage
