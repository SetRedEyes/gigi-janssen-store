import React from "react"
import "./App.css"
import "../normalize.css"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/common/navBar"
import { publicRoutes } from "./routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import ProtectedRoute from "./components/common/protectedRoute"
import AppLoader from "./components/ui/hoc/appLoader"
const App = () => {
    return (
        <div>
            <AppLoader>
                <NavBar />

                <Switch>
                    {publicRoutes.map(({ path, component, isProtectedRoute }) =>
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
            </AppLoader>
            <ToastContainer />
        </div>
    )
}
export default App
