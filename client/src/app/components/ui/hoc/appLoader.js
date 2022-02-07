import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getDataStatus, getIsLoggedIn, loadCurrentUser } from "../../../store/user"
import PropTypes from "prop-types"
import { loadCompaniesList } from "../../../store/companies"
import { loadCategoriesList } from "../../../store/categories"
import { loadProductsList } from "../../../store/products"

const AppLoader = ({ children }) => {
    const dataStatus = useSelector(getDataStatus())
    useEffect(() => {
        if (!dataStatus) dispatch(loadCurrentUser())
    }, [])

    const dispatch = useDispatch()
    const isLoggedIn = useSelector(getIsLoggedIn())
    console.log(isLoggedIn)
    useEffect(() => {
        dispatch(loadCompaniesList())
        dispatch(loadCategoriesList())
        dispatch(loadProductsList())
        if (isLoggedIn) {
            dispatch(loadCurrentUser())
        }
    }, [isLoggedIn])
    return children
}

AppLoader.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}
export default AppLoader
