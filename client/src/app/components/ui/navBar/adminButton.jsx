import React from "react"
import { Button } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { ADMIN_ROUTE } from "../../../consts"

const AdminButton = () => {
    return (
        <NavLink to={ADMIN_ROUTE} className="admin-btn">
            <Button variant={"outline-light"} className="navlink-btn me-5">
                Админ панель
            </Button>
        </NavLink>
    )
}

export default AdminButton
