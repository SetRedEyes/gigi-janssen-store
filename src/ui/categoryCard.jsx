import React from "react"
import { Card } from "react-bootstrap"
import PropTypes from "prop-types"

const CategoryCard = ({ name, photo }) => {
  return (
    <Card className="mt-5" style={{ width: "13rem", border: "none" }}>
      <Card.Img
        style={{ width: "13rem", height: "14rem" }}
        variant="top"
        src={photo}
      />
      <Card.Body>
        <Card.Text className="text-center link">{name}</Card.Text>
      </Card.Body>
    </Card>
  )
}

CategoryCard.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string
}

export default CategoryCard
