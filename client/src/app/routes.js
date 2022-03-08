import SearchPage from "./components/pages/searchPage"
import UserPage from "./components/pages/userPage"
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    LOGOUT_ROUTE,
    ORDER_ROUTE,
    PROFILE_ROUTE,
    SEARCH_ROUTE,
    SHOP_ROUTE
} from "./consts"
import AdminPanel from "./layouts/adminPanel"
import Cart from "./layouts/cart"
import Login from "./layouts/login"
import LogOut from "./layouts/logOut"
import Main from "./layouts/main"

export const routes = [
    {
        path: SHOP_ROUTE,
        component: Main
    },
    {
        path: LOGIN_ROUTE + "/:type?",
        component: Login
    },
    {
        path: PROFILE_ROUTE,
        component: UserPage,
        isProtectedRoute: true
    },
    {
        path: ADMIN_ROUTE + "/:productId?",
        component: AdminPanel,
        isProtectedRoute: true
    },
    { path: SEARCH_ROUTE, component: SearchPage },
    { path: ORDER_ROUTE, component: Cart },
    { path: LOGOUT_ROUTE, component: LogOut },
    {
        path: "/:companyName?/:categoryName?/:productId?",
        component: Main
    }
]
