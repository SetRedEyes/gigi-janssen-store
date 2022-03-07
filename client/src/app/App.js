import React from "react"
import { Switch, Route, Redirect } from "react-router-dom"
import "./App.css"
import "../normalize.css"
import "react-toastify/dist/ReactToastify.css"
import { routes } from "./routes"

import { ToastContainer } from "react-toastify"
import NavBar from "./components/ui/navBar"
import ProtectedRoute from "./components/common/protectedRoute"
import AppLoader from "./components/ui/hoc/appLoader"
import Footer from "./components/ui/footer"
import { SHOP_ROUTE } from "./consts"

const App = () => {
    return (
        <>
            <AppLoader>
                <NavBar />
                <div className="content">
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
                        <Redirect to={SHOP_ROUTE} />
                    </Switch>
                </div>
                <Footer />
            </AppLoader>
            <ToastContainer />
        </>
    )
}
export default App
