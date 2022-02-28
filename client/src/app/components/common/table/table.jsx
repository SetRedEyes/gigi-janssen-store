import React from "react"
import PropTypes from "prop-types"

import TableBody from "./tableBody"
import TableHeader from "./tableHeader"
import { Table as BootstrapTable } from "react-bootstrap"

const Table = ({ onSort, selectedSort, columns, data, children }) => {
    return (
        <BootstrapTable striped borderless hover className="mt-3 admin-panel-table">
            {children || (
                <>
                    <TableHeader {...{ onSort, selectedSort, columns }} />
                    <TableBody {...{ columns, data }} />
                </>
            )}
        </BootstrapTable>
    )
}

Table.propTypes = {
    onSort: PropTypes.func,
    selectedSort: PropTypes.object,
    columns: PropTypes.object,
    data: PropTypes.array,
    children: PropTypes.array
}

export default Table
