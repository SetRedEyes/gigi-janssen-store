import React from "react"
import "./App.css"
import "./normalize.css"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/common/navBar"
import { authRoutes, publicRoutes } from "./routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ProductProvider from "./hooks/useProducts"
import { CategoryProvider } from "./hooks/useCategory"
import { CompanyProvider } from "./hooks/useCompany"
import AuthProvider from "./hooks/useAuth"

const App = () => {
  const isAuth = false

  return (
    <div>
      <AuthProvider>
        <NavBar />
        <CompanyProvider>
          <CategoryProvider>
            <ProductProvider>
              <Switch>
                {isAuth &&
                  authRoutes.map(({ path, component }) => (
                    <Route key={path} path={path} component={component} exact />
                  ))}

                {publicRoutes.map(({ path, component }) => (
                  <Route key={path} path={path} component={component} exact />
                ))}
                <Redirect to={"/online-store-v2"} />
              </Switch>
            </ProductProvider>
          </CategoryProvider>
        </CompanyProvider>
      </AuthProvider>

      <ToastContainer />
    </div>
  )
}
export default App
