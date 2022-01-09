import React, { useState } from "react"
import { Link } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"

const NavProfile = () => {
    const { currentUser } = useAuth()
    const [isOpen, setOpen] = useState(false)
    const toggleMenu = () => {
        setOpen((prevState) => !prevState)
    }

    return (
        <div className="dropdown " onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div className="me-2 navProfile-name">{currentUser.firstName}</div>
                <i style={{ color: "white" }} className="bi bi-person-circle"></i>
            </div>
            <div
                className={
                    "w-100 dropdown-menu navProfile-dropdown" +
                    (isOpen ? " show" : "")
                }
            >
                <Link
                    to={"online-store-v2/profile"}
                    className="dropdown-item navProfile-item "
                >
                    Профиль
                </Link>
                <Link to="logout" className="dropdown-item navProfile-item ">
                    Выход
                </Link>
            </div>
        </div>
    )
}

export default NavProfile
