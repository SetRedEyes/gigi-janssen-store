import React from "react"
import { Card } from "react-bootstrap"
import PropTypes from "prop-types"

const CategoryCard = ({ name, photo }) => {
  return (
    <Card style={{ width: "13rem", border: "none" }} className="mb-3 ">
      <Card.Img
        style={{ width: "13rem", height: "14rem" }}
        variant="top"
        src={photo}
      />
      <Card.Body style={{ padding: "0" }}>
        <Card.Text className="text-center ">{name}</Card.Text>
      </Card.Body>
    </Card>
  )
}

CategoryCard.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string
}

export default CategoryCard
