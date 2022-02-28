import React from "react"
import PropTypes from "prop-types"
import { SHOP_ROUTE } from "../../consts"

import { Link } from "react-router-dom"
import { Card } from "react-bootstrap"

const CategoryCard = ({ fullName, photo, companyName, categoryName, catObj }) => {
    return (
        <Link
            className="link-title "
            to={{
                pathname: SHOP_ROUTE + `/${companyName}/${categoryName}`,
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
                    <Card.Text className="text-center p-1 pb-2 ">
                        {fullName}
                    </Card.Text>
                </Card.Body>
            </Card>
        </Link>
    )
}

CategoryCard.propTypes = {
    fullName: PropTypes.string,
    photo: PropTypes.string,
    companyName: PropTypes.string,
    categoryName: PropTypes.string,
    catObj: PropTypes.object
}

export default CategoryCard
