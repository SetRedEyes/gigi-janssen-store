import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataStatus, loadProductsList } from "../../../store/products"
import PropTypes from "prop-types"
import LoadingSpinner from "../../common/loadingSpinner"

const ProductsLoader = ({ children }) => {
    const dataStatus = useSelector(getDataStatus())
    const dispatch = useDispatch()
    useEffect(() => {
        if (!dataStatus) dispatch(loadProductsList())
    }, [])

    if (!dataStatus) {
        return <LoadingSpinner />
    }

    return children
}

ProductsLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
export default ProductsLoader
