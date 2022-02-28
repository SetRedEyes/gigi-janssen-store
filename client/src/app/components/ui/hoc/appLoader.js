import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useDispatch, useSelector } from "react-redux"
import { loadCompaniesList } from "../../../store/companies"
import { loadCategoriesList } from "../../../store/categories"
import { getProductsLoadingStatus, loadProductsList } from "../../../store/products"
import { getIsLoggedIn, loadCurrentUser } from "../../../store/user"
import LoadingSpinner from "../../common/loadingSpinner"

const AppLoader = ({ children }) => {
    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn())
    const productsStatusLoading = useSelector(getProductsLoadingStatus())

    useEffect(() => {
        dispatch(loadCompaniesList())
        dispatch(loadCategoriesList())
        dispatch(loadProductsList())
        if (isLoggedIn) {
            dispatch(loadCurrentUser())
        }
    }, [isLoggedIn])

    if (productsStatusLoading) return <LoadingSpinner />
    return children
}

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
export default AppLoader
