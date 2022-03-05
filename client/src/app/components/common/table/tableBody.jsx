import React from "react"
import PropTypes from "prop-types"
import _ from "lodash"

const TableBody = ({ data, columns }) => {
    const renderContent = (item, column) => {
        const path = _.get(item, columns[column].path) || item[column]

        const component = columns[column].component

        if (component) {
            if (typeof component === "function") {
                return <td key={column}>{component(item)}</td>
            }
        } else {
            return (
                <td key={column}>
                    {column.match(/^(name|rusName|photo)$/) ? (
                        <div
                            className={`long-string ${
                                column === "photo" ? "photo-string" : ""
                            }`}
                        >
                            {path}
                        </div>
                    ) : (
                        <div className="short-string text-center">{path}</div>
                    )}
                </td>
            )
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
