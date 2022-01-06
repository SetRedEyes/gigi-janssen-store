import React from "react"
import { Breadcrumb } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import PropTypes from "prop-types"
import { useCategory } from "../../hooks/useCategory"
import { useProduct } from "../../hooks/useProducts"
const BreadCrumbs = ({ productId }) => {
  const product = useProduct().getProduct(productId)
  const { categories } = useCategory()
  const { pathname } = useLocation()
  console.log(pathname.split("/"))
  const pathnames = pathname.split("/").filter((x) => {
    console.log(x)
    return x
  })
  console.log(pathnames)
  const renderCrumbName = (name) => {
    if (name === "gigi") {
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

  if (pathname === "/") return null
  return (
    <Breadcrumb className="ms-3 mt-2">
      <Breadcrumb.Item
        linkAs={Link}
        linkProps={{
          to: `/
`
        }}
      >
        Главная
      </Breadcrumb.Item>
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1
        const routeTo = `/${pathnames.slice(0, index + 1).join("/")}`
        console.log(name)
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
