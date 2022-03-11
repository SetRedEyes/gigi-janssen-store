import React from "react"
import { LOGIN_ROUTE } from "../../../consts"

import { Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const LoginButton = () => {
    return (
        <NavLink to={LOGIN_ROUTE} className="login-btn">
            <Button variant="outline-light" className="navlink-btn">
                Вход/Регистрация
            </Button>
        </NavLink>
    )
}

export default LoginButton
