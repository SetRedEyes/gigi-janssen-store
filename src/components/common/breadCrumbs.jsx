import React, { useEffect, useState } from "react"
import { Breadcrumb } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import api from "../../api"
import PropTypes from "prop-types"

const BreadCrumbs = ({ productId }) => {
  const [product, setProduct] = useState()
  const [categories, setCategories] = useState()
  const { pathname } = useLocation()

  function transformData(data) {
    const catArray = []
    for (const company in data) {
      for (const line in data[company]) {
        catArray.push(data[company][line])
      }
    }
    return catArray
  }

  useEffect(() => {
    api.categories.fetchAll().then((data) => setCategories(transformData(data)))
  }, [])

  useEffect(() => {
    api.products.getById(productId).then((data) => setProduct(data))
  }, [productId])

  const pathnames = pathname.split("/").filter((x) => x)
  const renderCrumbName = (name) => {
    if (name === "gigi") {
      return "Каталог GIGI"
    } else if (name === "janssen") {
      return "Каталог Janssen"
    } else if (categories && isNaN(name)) {
      return categories.find((cat) => cat._id === name).name
    } else if (product) {
      return `${product.name} - ${product.rusName}`
    }
  }

  if (pathname === "/") return null

  return (
    <Breadcrumb className="ms-3 mt-2">
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/` }}>
        Главная
      </Breadcrumb.Item>
      {pathnames.map((name, index) => {
        const isLast = index === pathnames.length - 1
        return (
          <Breadcrumb.Item
            linkAs={Link}
            linkProps={{ to: `/${name}` }}
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
