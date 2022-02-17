import React from "react"
import { Route, Redirect } from "react-router-dom"
import { useSelector } from "react-redux"
import { getIsLoggedIn } from "../../store/user"
import PropTypes from "prop-types"
import { LOGIN_ROUTE, SHOP_ROUTE } from "../../consts"

const ProtectedRoute = ({ component: Component, children, ...rest }) => {
    const isLoggedIn = useSelector(getIsLoggedIn())
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
