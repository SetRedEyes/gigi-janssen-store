/* eslint-disable multiline-ternary */
import { React, useState } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { SHOP_ROUTE } from "../utils/consts"

const NavBar = () => {
  const [auth, setAuth] = useState(false)
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
          GIGI & JANSSEN
        </NavLink>
        {auth ? (
          <Nav className="ms-auto" style={{ color: "white" }}>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"} className="ms-2">
              Войти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto" style={{ color: "white" }}>
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
