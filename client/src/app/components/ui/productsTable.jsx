import React from "react"
import PropTypes from "prop-types"

import Table from "react-bootstrap/Table"

const ProductsTable = ({ products, onSort, currentSort, ...rest }) => {
    const handleSort = (item) => {
        if (currentSort.iter === item) {
            onSort({
                ...currentSort,
                order: currentSort.order === "asc" ? "desc" : "asc"
            })
        } else {
            onSort({ iter: item, order: "asc" })
        }
    }
    return (
        <Table striped borderless hover className="mt-5 admin-panel-table">
            <thead>
                <tr>
                    <th onClick={() => handleSort("vendorCode")}>Артикул</th>
                    <th onClick={() => handleSort("name")}>
                        Английское наименование
                    </th>
                    <th onClick={() => handleSort("rusName")}>
                        Русское наименование
                    </th>
                    <th onClick={() => handleSort("companyName")}>Компания</th>
                    <th onClick={() => handleSort("category")}>Категория</th>
                    <th>Цена</th>
                    <th>Объем</th>
                    <th>Фото</th>
                    <th>Действия</th>
                </tr>
            </thead>
            <tbody>
                {products.map((p) => (
                    <tr key={p._id}>
                        <td>{p.vendorCode}</td>
                        <td>{p.name}</td>
                        <td>{p.rusName}</td>
                        <td>{p.companyName}</td>
                        <td>{p.category}</td>
                        <td>{p.price.join(", ")}</td>
                        <td>{p.volume.join(", ")}</td>
                        <td className="long-ceil">
                            <p className="long-string ">{p.photo.toString()}</p>
                        </td>
                    </tr>
                ))}
            </tbody>
        </Table>
    )
}

ProductsTable.propTypes = {
    products: PropTypes.array.isRequired,
    onSort: PropTypes.func.isRequired,
    currentSort: PropTypes.object.isRequired
}

export default ProductsTable
