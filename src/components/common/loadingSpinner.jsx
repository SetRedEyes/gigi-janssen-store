import React from "react"
import { Container, Spinner } from "react-bootstrap"

const LoadingSpinner = () => (
  <Container className="d-flex justify-content-center mt-4">
    <Spinner animation="border" variant="info" />
    <span className="mt-1 ms-2">Загрузка</span>
  </Container>
)

export default LoadingSpinner
