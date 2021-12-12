import React from "react"
import "./App.css"
import "./normalize.css"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/common/navBar"
import { authRoutes, publicRoutes } from "./routes"
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const App = () => {
  const isAuth = false

  return (
    <div>
      <NavBar />
      <Switch>
        {isAuth &&
          authRoutes.map(({ path, component }) => (
            <Route key={path} path={path} component={component} exact />
          ))}

        {publicRoutes.map(({ path, component }) => (
          <Route key={path} path={path} component={component} exact />
        ))}
        <Redirect to={"/"} />
      </Switch>
      <ToastContainer />
    </div>
  )
}
export default App
