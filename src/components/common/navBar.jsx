import { React, useState } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import SearchBar from "./searchBar"

const NavBar = () => {
  const { pathname } = useLocation()

  const [auth, setAuth] = useState(false)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="header-title text-decoration-none" to={"/"}>
          GIGI & JANSSEN
        </NavLink>
        {pathname !== "/login" && <SearchBar />}
        {auth ? (
          <Nav style={{ color: "white" }}>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"} className="ms-2">
              Войти
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: "white" }}>
            <NavLink onClick={() => setAuth(true)} to={"/login"}>
              <Button variant={"outline-light"} className="navlink-btn">
                Авторизация
              </Button>
            </NavLink>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}

export default NavBar
