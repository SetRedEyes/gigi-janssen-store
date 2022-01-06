import Admin from "./components/pages/Admin"
import Basket from "./components/pages/Basket"
import SearchPage from "./components/pages/searchPage/searchPage"
import Login from "./layouts/login"
import Main from "./layouts/main"

export const authRoutes = [
  {
    path: "/admin",
    component: Admin
  },
  {
    path: "/login",
    component: Basket
  }
]

export const publicRoutes = [
  {
    path: "https://setredeyes.github.io/online-store-v2/",
    component: Main
  },
  {
    path: "/login/:type?",
    component: Login
  },

  { path: "/basket", component: Basket },

  { path: "/search", component: SearchPage },

  {
    path: "/:companyId?/:categoryId?/:productId?",
    component: Main
  }
]
