import Admin from "./components/pages/Admin"
import Basket from "./components/pages/Basket"
import SearchPage from "./components/pages/searchPage/searchPage"
import UserPage from "./components/pages/userPage/userPage"
import Login from "./layouts/login"
import LogOut from "./layouts/logOut"
import Main from "./layouts/main"

export const authRoutes = [
    {
        path: "/online-store-v2/admin",
        component: Admin
    }
]

export const publicRoutes = [
    {
        path: "/online-store-v2",
        component: Main
    },
    {
        path: "/online-store-v2/login/:type?",
        component: Login
    },
    {
        path: "/online-store-v2/profile",
        component: UserPage,
        isProtectedRoute: true
    },

    { path: "/online-store-v2/basket", component: Basket },

    { path: "/online-store-v2/search", component: SearchPage },
    { path: "/online-store-v2/logOut", component: LogOut },

    {
        path: "/online-store-v2/:companyId?/:categoryId?/:productId?",
        component: Main
    }
]
