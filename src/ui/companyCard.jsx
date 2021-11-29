import React from "react"
import { Card } from "react-bootstrap"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const CompanyCard = ({ name, photo, companyId }) => {
  return (
    <Card className="mt-2" style={{ width: "18.5rem", border: "none" }}>
      <Link className="link text-decoration-none" to={`/${companyId}`}>
        <Card.Img
          style={{ width: "18.5rem", height: "18.5rem" }}
          variant="top"
          src={photo}
        />
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
        </Card.Body>
      </Link>
    </Card>
  )
}

CompanyCard.propTypes = {
  name: PropTypes.string,
  photo: PropTypes.string,
  companyId: PropTypes.string
}

export default CompanyCard
