import React from "react"
import { Breadcrumb } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import { useProduct } from "../../hooks/useProducts"
import { getCategories } from "../../store/categories"
import { useSelector } from "react-redux"

const BreadCrumbs = ({ productId }) => {
    const product = useProduct().getProduct(productId)
    const categories = useSelector(getCategories())
    const { pathname } = useLocation()
    const pathnames = pathname
        .slice(20)
        .split("/")
        .filter((x) => x)
    console.log(pathnames)

    const renderCrumbName = (name) => {
        if (name === "profile") {
            return "Профиль"
        } else if (name === "gigi") {
            return "Каталог GIGI"
        } else if (name === "janssen") {
            return "Каталог Janssen"
        } else if (name === "search") {
            return "Поиск"
        } else if (product && product._id === name) {
            return `${product.name} - ${product.rusName}`
        } else if (categories && isNaN(name)) {
            return categories.find((cat) => cat._id === name)?.name
        }
    }

    if (pathname === "/gigi-janssen-store" || pathname === "/gigi-janssen-store/") {
        return null
    }

    return (
        <Breadcrumb className="ms-3 mt-2">
            <Breadcrumb.Item
                linkAs={Link}
                linkProps={{
                    to: `/gigi-janssen-store
`
                }}
            >
                Главная
            </Breadcrumb.Item>
            {pathnames.map((name, index) => {
                const isLast = index === pathnames.length - 1
                const routeTo = `/gigi-janssen-store/${pathnames
                    .slice(0, index + 1)
                    .join("/")}`
                console.log(routeTo)
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
