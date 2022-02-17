import React from "react"
import { useParams } from "react-router-dom"
import AdminPage from "../components/pages/adminPage"
import EditProductPage from "../components/pages/editProductPage/editProductPage"

const AdminPanel = () => {
    const params = useParams()
    const { productId } = params

    console.log(productId)

    return <>{productId ? <EditProductPage /> : <AdminPage />}</>
}

export default AdminPanel
