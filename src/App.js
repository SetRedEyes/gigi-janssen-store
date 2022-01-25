import React, { useEffect } from "react"
import "./App.css"
import "./normalize.css"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/common/navBar"
import { publicRoutes } from "./routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ProductProvider from "./hooks/useProducts"
import { CategoryProvider } from "./hooks/useCategory"
import AuthProvider from "./hooks/useAuth"
import ProtectedRoute from "./components/common/protectedRoute"
import { useDispatch } from "react-redux"
import { loadCompaniesList } from "./store/companies"

const App = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(loadCompaniesList())
    }, [])
    return (
        <div>
            <AuthProvider>
                <NavBar />

                <CategoryProvider>
                    <ProductProvider>
                        <Switch>
                            {publicRoutes.map(
                                ({ path, component, isProtectedRoute }) =>
                                    isProtectedRoute ? (
                                        <ProtectedRoute
                                            key={path}
                                            path={path}
                                            component={component}
                                            exact
                                        />
                                    ) : (
                                        <Route
                                            key={path}
                                            path={path}
                                            component={component}
                                            exact
                                        />
                                    )
                            )}
                            <Redirect to={"/gigi-janssen-store"} />
                        </Switch>
                    </ProductProvider>
                </CategoryProvider>
            </AuthProvider>

            <ToastContainer />
        </div>
    )
}
export default App
