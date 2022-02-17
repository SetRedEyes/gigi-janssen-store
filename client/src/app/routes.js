import Basket from "./components/pages/Basket"
import SearchPage from "./components/pages/searchPage"
import UserPage from "./components/pages/userPage"
import AdminPanel from "./layouts/adminPanel"
import Login from "./layouts/login"
import LogOut from "./layouts/logOut"
import Main from "./layouts/main"

export const routes = [
    {
        path: "/gigi-janssen-store",
        component: Main
    },
    {
        path: "/gigi-janssen-store/login/:type?",
        component: Login
    },
    {
        path: "/gigi-janssen-store/profile",
        component: UserPage,
        isProtectedRoute: true
    },
    {
        path: "/gigi-janssen-store/adminPage/:productId?",
        component: AdminPanel,
        isProtectedRoute: true
    },
    { path: "/gigi-janssen-store/basket", component: Basket },

    { path: "/gigi-janssen-store/search", component: SearchPage },
    { path: "/gigi-janssen-store/logOut", component: LogOut },

    {
        path: "/gigi-janssen-store/:companyName?/:categoryName?/:productId?",
        component: Main
    }
]
