import React from "react"
import { useParams } from "react-router-dom"
import AdminPage from "../components/pages/adminPage"
import EditProductPage from "../components/pages/editProductPage"
import ProductsLoader from "../components/ui/hoc/productsLoader"

const AdminPanel = () => {
    const params = useParams()
    const { productId } = params

    return (
        <ProductsLoader>
            {productId ? <EditProductPage /> : <AdminPage />}
        </ProductsLoader>
    )
}

export default AdminPanel
