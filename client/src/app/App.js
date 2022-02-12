import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import "./App.css"
import "../normalize.css"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { routes } from "./routes"
import NavBar from "./components/common/navBar"
import ProtectedRoute from "./components/common/protectedRoute"
import AppLoader from "./components/ui/hoc/appLoader"

const App = () => {
    return (
        <div>
            <AppLoader>
                <NavBar />

                <Switch>
                    {routes.map(({ path, component, isProtectedRoute }) =>
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
