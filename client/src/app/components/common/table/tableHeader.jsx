import React from "react"
import PropTypes from "prop-types"

const TableHeader = ({ onSort, selectedSort, columns }) => {
    const handleSort = (item) => {
        if (selectedSort.path === item) {
            onSort({
                ...selectedSort,
                order: selectedSort.order === "asc" ? "desc" : "asc"
            })
        } else {
            onSort({ path: item, order: "asc" })
        }
    }

    const renderSortArrow = (selectedSort, currentPath) => {
        if (currentPath && selectedSort.path === currentPath) {
            if (selectedSort.order === "asc") {
                return <i className="bi bi-caret-down-fill"></i>
            } else {
                return <i className="bi bi-caret-up-fill"></i>
            }
        }
        return null
    }

    return (
        <thead>
            <tr>
                {Object.keys(columns).map((column) => {
                    const path = columns[column].path
                    return (
                        <th
                            key={column}
                            onClick={path ? () => handleSort(path) : undefined}
                            {...{
                                role: path && "button",
                                className: path ? "table-title " : ""
                            }}
                        >
                            <div className="d-flex justify-content-center">
                                {[columns[column].name]}
                                {renderSortArrow(selectedSort, path)}
                            </div>
                        </th>
                    )
                })}
            </tr>
        </thead>
    )
}

TableHeader.propTypes = {
    onSort: PropTypes.func.isRequired,
    selectedSort: PropTypes.object.isRequired,
    columns: PropTypes.object.isRequired
}

export default TableHeader
