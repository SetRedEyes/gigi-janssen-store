import React from "react"
import { Card } from "react-bootstrap"
import PropTypes from "prop-types"
import { Link } from "react-router-dom"

const CategoryCard = ({ name, photo, companyId, categoryId, catObj }) => {
    return (
        <Link
            className="link text-decoration-none "
            to={{
                pathname: `/gigi-janssen-store/${companyId}/${categoryId}`,
                state: {
                    selectedCatProp: catObj
                }
            }}
        >
            <Card style={{ width: "13rem", border: "none" }} className="mb-3 ">
                <Card.Img
                    style={{ width: "13rem", height: "14rem" }}
                    variant="top"
                    src={photo}
                />
                <Card.Body style={{ padding: "0" }}>
                    <Card.Text className="text-center p-1 pb-2 ">{name}</Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

CategoryCard.propTypes = {
    name: PropTypes.string,
    photo: PropTypes.string,
    companyId: PropTypes.string,
    categoryId: PropTypes.string,
    catObj: PropTypes.object
}

export default CategoryCard
