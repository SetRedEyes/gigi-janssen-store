import React from "react"
import CompanyPage from "../components/pages/companyPage/companyPage"
import CategoryPage from "../components/pages/categoryPage/categoryPage"
import { useParams } from "react-router-dom"
import ProductsListPage from "../components/pages/productsListPage/productsListPage"
import ProductPage from "../components/pages/productPage/productPage"
import BreadCrumbs from "../components/common/breadCrumbs"

const Main = () => {
    const params = useParams()
    const { companyName, categoryId, productId } = params

    return (
        <>
            <BreadCrumbs productId={productId} />

            {companyName ? (
                categoryId ? (
                    productId ? (
                        <ProductPage productId={productId} companyName={companyName} />
                    ) : (
                        <ProductsListPage
                            companyName={companyName}
                            categoryId={categoryId}
                        />
                    )
                ) : (
                    <CategoryPage companyName={companyName} />
                )
            ) : (
                <CompanyPage />
            )}
        </>
    )
}

export default Main
