import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import Main from "./layouts/main"
// import CategoryPage from "./pages/categoryPage/categoryPage"
// import Products from "./components/products"

export const BASKET_ROUTE = "/basket"
export const PRODUCT_ROUTE = "/product"

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
    path: "/",
    component: Main
  },
  {
    path: "/login",
    component: Auth
  },
  {
    path: "/registration",
    component: Auth
  },
  { path: "/basket", component: Basket },

  {
    path: "/:companyId?/:categoryId?",
    component: Main
  }
]
