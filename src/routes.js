import Admin from "./pages/Admin"
import Auth from "./pages/Auth"
import Basket from "./pages/Basket"
import ProductPage from "./components/productPage"
import Shop from "./pages/Shop"
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  PRODUCT_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE
} from "./utils/consts"

export const authRoutes = [
  {
    path: ADMIN_ROUTE,
    component: Admin
  },
  {
    path: BASKET_ROUTE,
    component: Basket
  }
]

export const publicRoutes = [
  {
    path: SHOP_ROUTE,
    component: Shop
  },
  {
    path: LOGIN_ROUTE,
    component: Auth
  },
  {
    path: REGISTRATION_ROUTE,
    component: Auth
  },
  {
    path: PRODUCT_ROUTE + "/:productId",
    component: ProductPage
  }
]
