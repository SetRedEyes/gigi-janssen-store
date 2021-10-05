import React from "react"
import "./App.css"
import { Switch, Route, Redirect } from "react-router-dom"
import NavBar from "./components/navBar"
import { authRoutes, publicRoutes } from "./routes"
import { SHOP_ROUTE } from "./utils/consts"
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
        <Redirect to={SHOP_ROUTE} />
      </Switch>
    </div>
  )
}
export default App
