import { React, useState } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const NavBar = () => {
  const [auth, setAuth] = useState(false)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink className="header-title text-decoration-none" to={"/"}>
          GIGI & JANSSEN
        </NavLink>
        {auth ? (
          <Nav style={{ color: "white" }}>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"} className="ms-2">
              Войти
            </Button>
          </Nav>
        ) : (
          <Nav style={{ color: "white" }}>
            <Button variant={"outline-light"} onClick={() => setAuth(true)}>
              Авторизация
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
}

export default NavBar
