import { React } from "react"
import { useSelector } from "react-redux"
import { getCurrentUserData, getIsAdmin, getIsLoggedIn } from "../../store/user"
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../../consts"

import { Link, NavLink } from "react-router-dom"
import { Button, Nav, Navbar } from "react-bootstrap"
import CartButton from "./cart/cartButton"
import SearchBar from "./searchBar"
import NavProfile from "./navProfile"

const NavBar = () => {
    const currentUser = useSelector(getCurrentUserData())
    const isAdmin = useSelector(getIsAdmin())
    const isloggedIn = useSelector(getIsLoggedIn())

    console.log(isAdmin)

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

            <SearchBar />
            <div className="flex-between align-items-center  me-5">
                <CartButton />

                {isAdmin ? (
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
                    </>
                ) : isloggedIn && currentUser ? (
                    <NavProfile currentUser={currentUser} />
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
