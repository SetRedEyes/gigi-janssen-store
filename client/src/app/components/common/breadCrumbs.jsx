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

    const pathnames = pathname.split("/").filter((x) => x)

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

    if (pathname === SHOP_ROUTE) {
        return null
    }

    return (
        <Breadcrumb className="ms-3 mt-2">
            <Breadcrumb.Item linkAs={Link} linkProps={{ to: SHOP_ROUTE }}>
                Главная
            </Breadcrumb.Item>
            {pathnames.map((name, index) => {
                const isLast = index === pathnames.length - 1
                const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
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
            <Link
                to={pathname.includes("gigi") ? "/janssen" : "/gigi"}
                className="ms-auto  me-5"
            >
                Перейти в каталог {pathname.includes("gigi") ? "Janssen" : "GiGi"}
            </Link>
        </Breadcrumb>
    )
}

BreadCrumbs.propTypes = {
    productId: PropTypes.string
}

export default BreadCrumbs
