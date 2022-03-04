import { React } from "react"
import { useSelector } from "react-redux"
import { getCurrentUserData, getIsLoggedIn } from "../../store/user"
import { ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SHOP_ROUTE } from "../../consts"

import { Link, NavLink, useLocation } from "react-router-dom"
import { Button, Nav, Navbar } from "react-bootstrap"
import CartButton from "./cart/cartButton"
import SearchBar from "./searchBar"

const NavBar = () => {
    const { pathname } = useLocation()
    const currentUser = useSelector(getCurrentUserData())
    const isloggedIn = useSelector(getIsLoggedIn())

    const isIncludes = (...paths) => {
        return !paths.some((path) => pathname.includes(path))
    }

    return (
        <Navbar
            bg="dark"
            variant="dark"
            sticky="top"
            className="d-flex justify-content-between"
        >
            <NavLink
                className="header-title text-decoration-none ms-5"
                to={SHOP_ROUTE}
            >
                GIGI & JANSSEN
            </NavLink>

            {isIncludes(LOGIN_ROUTE, PROFILE_ROUTE, ADMIN_ROUTE) && <SearchBar />}
            <div className="flex-between align-items-center  me-5">
                <CartButton />

                {isloggedIn && currentUser ? (
                    <>
                        <Link
                            to={SHOP_ROUTE + ADMIN_ROUTE}
                            className="navProfile-name "
                        >
                            <Button
                                variant={"outline-light"}
                                className="navlink-btn me-5"
                            >
                                Админ панель
                            </Button>
                        </Link>

                        <Link
                            to={SHOP_ROUTE + PROFILE_ROUTE}
                            className="navProfile-name"
                        >
                            {currentUser.firstName}
                            <i
                                style={{ color: "white" }}
                                className="bi bi-person-circle ms-2"
                            ></i>
                        </Link>
                    </>
                ) : (
                    <Nav>
                        <NavLink to={SHOP_ROUTE + LOGIN_ROUTE}>
                            <Button variant="outline-light" className="navlink-btn ">
                                Вход/Регистрация
                            </Button>
                        </NavLink>
                    </Nav>
                )}
            </div>
        </Navbar>
    )
}

export default NavBar
