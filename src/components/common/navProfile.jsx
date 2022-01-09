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
        <div className="dropdown" onClick={toggleMenu}>
            <div className="btn dropdown-toggle d-flex align-items-center">
                <div style={{ color: "white" }} className="me-2">
                    {currentUser.firstName}
                </div>
                <i style={{ color: "white" }} className="bi bi-person-circle"></i>
            </div>
            <div className={"w-100 dropdown-menu" + (isOpen ? " show" : "")}>
                <Link to={"online-store-v2/profile"}>Профиль</Link>
            </div>
        </div>
    )
}

export default NavProfile
