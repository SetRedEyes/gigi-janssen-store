import { React } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { useSelector } from "react-redux"
import { getCurrentUserData, getIsLoggedIn } from "../../store/user"
import SearchBar from "./searchBar"
import { ADMIN_ROUTE, LOGIN_ROUTE, PROFILE_ROUTE, SHOP_ROUTE } from "../../consts"

const NavBar = () => {
    const { pathname } = useLocation()
    const currentUser = useSelector(getCurrentUserData())
    const isloggedIn = useSelector(getIsLoggedIn())

    // function includesPath(...args) {
    //     const paths = [...args]
    //     // console.log(pathname.includes(...paths))
    //     let a = 1
    //     paths.forEach((p) => (a = !pathname.includes(p)))
    //     // for (const path of paths) {
    //     //     console.log(path)
    //     //     a = !pathname.includes(path)
    //     //     console.log(a)
    //     // }
    //     console.log(pathname.includes("/profile"))

    //     return a
    // }

    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <NavLink
                    className="header-title text-decoration-none ms-5"
                    to={SHOP_ROUTE}
                >
                    GIGI & JANSSEN
                </NavLink>
                {pathname !== SHOP_ROUTE + LOGIN_ROUTE &&
                    pathname !== SHOP_ROUTE + PROFILE_ROUTE &&
                    !pathname.includes(ADMIN_ROUTE) && <SearchBar />}

                <div className="d-flex me-5 ">
                    {isloggedIn && currentUser ? (
                        <div className="d-flex align-items-center">
                            <Link
                                to={SHOP_ROUTE + ADMIN_ROUTE}
                                className="navProfile-name text-decoration-none me-5"
                            >
                                <Button
                                    variant={"outline-light"}
                                    className="navlink-btn"
                                >
                                    Админ панель
                                </Button>
                            </Link>

                            <Link
                                to={SHOP_ROUTE + PROFILE_ROUTE}
                                className="navProfile-name text-decoration-none me-2"
                            >
                                {currentUser.firstName}
                                <i
                                    style={{ color: "white" }}
                                    className="bi bi-person-circle ms-2"
                                ></i>
                            </Link>
                        </div>
                    ) : (
                        <Nav>
                            <NavLink to={SHOP_ROUTE + LOGIN_ROUTE}>
                                <Button
                                    variant={"outline-light"}
                                    className="navlink-btn"
                                >
                                    Вход/Регистрация
                                </Button>
                            </NavLink>
                        </Nav>
                    )}
                </div>
            </Container>
        </Navbar>
    )
}

export default NavBar
