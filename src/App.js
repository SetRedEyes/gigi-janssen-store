import React from "react"
import "./App.css"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/navBar"
import { authRoutes, publicRoutes } from "./routes"
import BreadCrumbs from "./components/breadCrumbs.jsx"

const App = () => {
  const isAuth = false

  return (
    <div>
      <NavBar />
      <BreadCrumbs />
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
    </div>
  )
}
export default App
