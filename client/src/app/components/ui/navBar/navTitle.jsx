import React from "react"
import { SHOP_ROUTE } from "../../../consts"
import { NavLink } from "react-router-dom"

const NavbarTitle = () => {
    return (
        <NavLink className="header-title" to={SHOP_ROUTE}>
            GIGI & JANSSEN
        </NavLink>
    )
}

export default NavbarTitle
