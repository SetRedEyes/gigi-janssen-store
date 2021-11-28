import React, { useEffect, useState } from "react"
import { Breadcrumb } from "react-bootstrap"
import { Link, useLocation } from "react-router-dom"
import api from "../api"

const BreadCrumbs = () => {
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

  const pathnames = pathname.split("/").filter((x) => x)

  const renderCrumbName = (pathName) => {
    if (pathName === "gigi") {
      return "Каталог GIGI"
    } else if (pathName === "janssen") {
      return "Каталог Janssen"
    } else if (categories) {
      return categories.find((cat) => cat._id === pathName).name
    }
  }

  if (pathname === "/") return null

  return (
    <Breadcrumb>
      <Breadcrumb.Item linkAs={Link} linkProps={{ to: `/` }}>
        Главная
      </Breadcrumb.Item>
      {pathnames.map((pathname, index) => {
        const isLast = index === pathnames.length - 1
        return (
          <Breadcrumb.Item
            linkAs={Link}
            linkProps={{ to: `/${pathname}` }}
            key={pathname}
            active={isLast}
          >
            {renderCrumbName(pathname)}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
}

export default BreadCrumbs
