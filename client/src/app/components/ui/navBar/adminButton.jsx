import React from "react"
import { Button, Nav } from "react-bootstrap"
import { ADMIN_ROUTE } from "../../../consts"

const AdminButton = () => {
    return (
        <Nav.Link href={ADMIN_ROUTE} className="admin-btn">
            <Button variant={"outline-light"} className="navlink-btn me-5">
                Админ панель
            </Button>
        </Nav.Link>
    )
}

export default AdminButton
