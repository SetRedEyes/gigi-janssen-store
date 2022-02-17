import Basket from "./components/pages/Basket"
import SearchPage from "./components/pages/searchPage"
import UserPage from "./components/pages/userPage"
import {
    ADMIN_ROUTE,
    LOGIN_ROUTE,
    LOGOUT_ROUTE,
    PROFILE_ROUTE,
    SEARCH_ROUTE,
    SHOP_ROUTE
} from "./consts"
import AdminPanel from "./layouts/adminPanel"
import Login from "./layouts/login"
import LogOut from "./layouts/logOut"
import Main from "./layouts/main"

export const routes = [
    {
        path: SHOP_ROUTE,
        component: Main
    },
    {
        path: SHOP_ROUTE + LOGIN_ROUTE + "/:type?",
        component: Login
    },
    {
        path: SHOP_ROUTE + PROFILE_ROUTE,
        component: UserPage,
        isProtectedRoute: true
    },
    {
        path: SHOP_ROUTE + ADMIN_ROUTE + "/:productId?",
        component: AdminPanel,
        isProtectedRoute: true
    },
    { path: SHOP_ROUTE + "/basket", component: Basket },

    { path: SHOP_ROUTE + SEARCH_ROUTE, component: SearchPage },
    { path: SHOP_ROUTE + LOGOUT_ROUTE, component: LogOut },

    {
        path: SHOP_ROUTE + "/:companyName?/:categoryName?/:productId?",
        component: Main
    }
]
