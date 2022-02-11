import React from "react"
import { useParams } from "react-router-dom"

import CompanyPage from "../components/pages/companyPage"
import BreadCrumbs from "../components/common/breadCrumbs"
import CategoryPage from "../components/pages/categoryPage"
import ProductsListPage from "../components/pages/productsListPage/productsListPage"
import ProductPage from "../components/pages/productPage"

const Main = () => {
    const params = useParams()
    const { companyName, categoryName, productId } = params

    return (
        <>
            <BreadCrumbs productId={productId} />

            {companyName ? (
                categoryName ? (
                    productId ? (
                        <ProductPage
                            productId={productId}
                            companyName={companyName}
                        />
                    ) : (
                        <ProductsListPage
                            companyName={companyName}
                            categoryName={categoryName}
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
