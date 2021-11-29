import React from "react"
import CompanyPage from "../pages/companyPage/companyPage"
import CategoryPage from "../pages/categoryPage/categoryPage"
import { useParams } from "react-router-dom"
import ProductsListPage from "../pages/productsListPage/productsListPage"
import ProductPage from "../pages/productPage/productPage"
import BreadCrumbs from "../components/breadCrumbs"

const Main = () => {
  const params = useParams()
  const { companyId, categoryId, productId } = params
  return (
    <>
      <BreadCrumbs productId={productId} />

      {companyId ? (
        categoryId ? (
          productId ? (
            <ProductPage
              productId={productId}
              categoryId={categoryId}
              companyId={companyId}
            />
          ) : (
            <ProductsListPage companyId={companyId} categoryId={categoryId} />
          )
        ) : (
          <CategoryPage companyId={companyId} />
        )
      ) : (
        <CompanyPage />
      )}
    </>
  )
}

export default Main
