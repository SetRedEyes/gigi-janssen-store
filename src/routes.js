import Admin from "./components/pages/Admin"
import Basket from "./components/pages/Basket"
import SearchPage from "./components/pages/searchPage/searchPage"
import Login from "./layouts/login"
import Main from "./layouts/main"

export const authRoutes = [
  {
    path: "/online-store-v2/admin",
    component: Admin
  },
  {
    path: "/online-store-v2/login",
    component: Basket
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

  { path: "/online-store-v2/basket", component: Basket },

  { path: "/online-store-v2/search", component: SearchPage },

  {
    path: "/online-store-v2/:companyId?/:categoryId?/:productId?",
    component: Main
  }
]
