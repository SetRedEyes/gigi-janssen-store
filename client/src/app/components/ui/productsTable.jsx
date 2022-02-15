import React from "react"
import PropTypes from "prop-types"

import EditButton from "../common/editButton"
import DeleteButton from "../common/deleteButton"
import DataList from "./dataList"
import Table from "../common/table"

const ProductsTable = ({
    products,
    onSort,
    selectedSort,
    onEditProduct,
    onDeleteProduct,
    ...rest
}) => {
    const columns = {
        vendorCode: { path: "vendorCode", name: "Артикул" },
        name: { path: "name", name: "Английское наименование" },
        rusName: { path: "rusName", name: "Русское наименование" },
        companyName: { path: "companyName", name: "Компания" },
        category: { path: "category", name: "Категория" },
        price: {
            name: "Цена",
            component: (product) => <DataList data={product.price} />
        },
        volume: {
            name: "Объем",
            component: (product) => <DataList data={product.volume} />
        },
        photo: { name: "Фото" },
        edit: {
            name: "Редактировать",
            component: (product) => (
                <EditButton onClick={() => onEditProduct(product._id)} />
            )
        },
        delete: {
            name: "Удалить",
            component: (product) => (
                <DeleteButton onClick={() => onDeleteProduct(product._id)} />
            )
        }
    }

    return (
        <Table
            onSort={onSort}
            selectedSort={selectedSort}
            columns={columns}
            data={products}
        ></Table>
    )
}

ProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    onEditProduct: PropTypes.func,
    onDeleteProduct: PropTypes.func
}

export default ProductsTable
