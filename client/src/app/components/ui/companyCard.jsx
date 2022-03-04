import React from "react"
import PropTypes from "prop-types"
import { SHOP_ROUTE } from "../../consts"

import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const CompanyCard = ({ fullName, photo, companyName }) => {
    return (
        <Card className="company-card">
            <Link className="link-title" to={SHOP_ROUTE + `/${companyName}`}>
                <Card.Img variant="top" src={photo} className="company-card_img" />
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
