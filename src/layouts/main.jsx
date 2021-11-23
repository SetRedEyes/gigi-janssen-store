import React from "react"
import CompanyPage from "../pages/companyPage/companyPage"
import CategoryPage from "../pages/categoryPage/categoryPage"
import { useParams } from "react-router-dom"
import ProductsListPage from "../pages/productsListPage/productsListPage"

const Main = () => {
  const params = useParams()
  const { companyId, categoryId } = params
  return (
    <>
      {companyId ? (
        categoryId ? (
          <ProductsListPage companyId={companyId} />
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
