import React from "react"
import PropTypes from "prop-types"

const DataList = ({ data }) => {
    return (
        <>
            {data.map((item) => (
                <span key={item} className="row flex-center">
                    {item}
                </span>
            ))}
        </>
    )
}

DataList.propTypes = {
    data: PropTypes.array
}

export default DataList
