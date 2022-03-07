import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { getCategories } from "../../store/categories"
import { getProductById } from "../../store/products"
import { SHOP_ROUTE } from "../../consts"

import { Link, useLocation } from "react-router-dom"
import { Breadcrumb } from "react-bootstrap"

const BreadCrumbs = ({ productId }) => {
    const product = useSelector(getProductById(productId))
    const categories = useSelector(getCategories())
    const { pathname } = useLocation()

    const pathnames = pathname
        .slice(20)
        .split("/")
        .filter((x) => x)

    const renderCrumbName = (name) => {
        switch (name) {
            case "gigi":
                return "Каталог GiGi"

            case "janssen":
                return "Каталог Janssen"

            case "search":
                return "Поиск"

            case product && product._id:
                return product.name

            default:
                return categories.find((cat) => cat.name === name)?.fullName
        }
    }

    if (pathname === SHOP_ROUTE || pathname === `${SHOP_ROUTE}/a`) {
        return null
    }

    return (
        <Breadcrumb className="ms-3 mt-2">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: SHOP_ROUTE }}>
                Главная
            </Breadcrumb.Item>
            {pathnames.map((name, index) => {
                const isLast = index === pathnames.length - 1
                const routeTo = `${SHOP_ROUTE}/${pathnames
                    .slice(0, index + 1)
                    .join("/")}`
                return (
                    <Breadcrumb.Item
                        linkAs={Link}
                        linkProps={{ to: routeTo }}
                        key={name}
                        active={isLast}
                    >
                        {renderCrumbName(name)}
                    </Breadcrumb.Item>
                )
            })}
        </Breadcrumb>
    )
}

BreadCrumbs.propTypes = {
    productId: PropTypes.string
}

export default BreadCrumbs
