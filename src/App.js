import React from "react"
import "./App.css"
import "./normalize.css"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/common/navBar"
import { publicRoutes } from "./routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ProductProvider from "./hooks/useProducts"
import { CategoryProvider } from "./hooks/useCategory"
import { CompanyProvider } from "./hooks/useCompany"
import AuthProvider from "./hooks/useAuth"
import ProtectedRoute from "./components/common/protectedRoute"

const App = () => {
    return (
        <div>
            <AuthProvider>
                <NavBar />

                <CompanyProvider>
                    <CategoryProvider>
                        <ProductProvider>
                            <Switch>
                                {publicRoutes.map(
                                    ({ path, component, isProtectedRoute }) => {
                                        if (isProtectedRoute) {
                                            return (
                                                <ProtectedRoute
                                                    key={path}
                                                    path={path}
                                                    component={component}
                                                    exact
                                                />
                                            )
                                        } else {
                                            return (
                                                <Route
                                                    key={path}
                                                    path={path}
                                                    component={component}
                                                    exact
                                                />
                                            )
                                        }
                                    }
                                )}
                                <Redirect to={"/gigi-janssen-store"} />
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
