import React from "react"
import { Card } from "react-bootstrap"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const CompanyCard = ({ fullName, photo, companyName }) => {
    return (
        <Card className="mt-5" style={{ width: "18.5rem", border: "none" }}>
            <Link
                className="link text-decoration-none"
                to={`/gigi-janssen-store/${companyName}`}
            >
                <Card.Img
                    style={{ width: "18.5rem", height: "18.5rem" }}
                    variant="top"
                    src={photo}
                />
                <Card.Body>
                    <Card.Title className="text-center">{fullName}</Card.Title>
                </Card.Body>
            </Link>
        </Card>
    )
}

CompanyCard.propTypes = {
    fullName: PropTypes.string,
    photo: PropTypes.string,
    companyName: PropTypes.string
}

export default CompanyCard
