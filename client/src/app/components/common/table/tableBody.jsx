import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        const path = _.get(item, columns[column].path) || item[column]

        if (column === "photo") {
            return (
                <td key={column} className="long-ceil">
                    <p className="long-string ">{path}</p>
                </td>
            )
        }

        const component = columns[column].component

        if (component) {
            if (typeof component === "function") {
                return <td key={column}>{component(item)}</td>
            }
        } else {
            return <td key={column}>{path}</td>
        }
    }

    return (
        <tbody>
            {data.map((item) => (
                <tr key={item._id}>
                    {Object.keys(columns).map((column) =>
                        renderContent(item, column)
                    )}
                </tr>
            ))}
        </tbody>
    )
}

TableBody.propTypes = {
    data: PropTypes.array,
    columns: PropTypes.object
}

export default TableBody
