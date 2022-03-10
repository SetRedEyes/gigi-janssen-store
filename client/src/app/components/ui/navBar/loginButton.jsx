import React from "react"
import { LOGIN_ROUTE } from "../../../consts"

import { Button, Nav } from "react-bootstrap"

const LoginButton = () => {
    return (
        <Nav.Link href={LOGIN_ROUTE}>
            <Button variant="outline-light" className="navlink-btn me-5">
                Вход/Регистрация
            </Button>
        </Nav.Link>
    )
}

export default LoginButton
