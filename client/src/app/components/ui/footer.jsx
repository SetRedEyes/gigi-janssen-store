import React from "react"
import { Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { SHOP_ROUTE } from "../../consts"

const Footer = () => {
    return (
        <Navbar bg="dark" variant="dark" sticky="top" className="footer">
            <ul className="list-unstyled">
                {/* <li>Все права защищены</li> */}
                {/* <li>gigi-janssen-store © 2022</li> */}
                <li>
                    <a
                        className="navProfile-name"
                        href={"https://github.com/SetRedEyes"}
                    >
                        Разработчик
                    </a>
                </li>
            </ul>{" "}
            <NavLink className="header-title" to={SHOP_ROUTE}>
                GIGI & JANSSEN
            </NavLink>
            <ul className="list-unstyled">
                <li>
                    <a
                        className="navProfile-name"
                        href="mailto:denidraven@gmail.com"
                    >
                        denidraven@gmail.com
                    </a>
                </li>
            </ul>
        </Navbar>
    )
}

export default Footer
