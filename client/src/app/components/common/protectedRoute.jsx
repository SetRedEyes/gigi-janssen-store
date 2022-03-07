import React from "react"
import PropTypes from "prop-types"
import { useSelector } from "react-redux"
import { getIsAdmin, getIsLoggedIn } from "../../store/user"
import { LOGIN_ROUTE, SHOP_ROUTE } from "../../consts"
import { Route, Redirect } from "react-router-dom"

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn())
    const isAdmin = useSelector(getIsAdmin())

    return (
        <Route
            {...rest}
            render={(props) => {
                if (!isLoggedIn) {
                    return (
                        <Redirect
                            to={{
                                pathname: SHOP_ROUTE + LOGIN_ROUTE,
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
                } else if (!isAdmin) {
                    return (
                        <Redirect
                            to={{
                                pathname: SHOP_ROUTE,
                                state: {
                                    from: props.location
                                }
                            }}
                        />
                    )
                }
                return Component ? <Component {...props} /> : children
            }}
        />
    )
}

ProtectedRoute.propTypes = {
    component: PropTypes.func,
    location: PropTypes.object,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default ProtectedRoute
