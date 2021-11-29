import React from "react"
import "./App.css"
import "./normalize.css"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/navBar"
import { authRoutes, publicRoutes } from "./routes"

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
    </div>
  )
}
export default App
