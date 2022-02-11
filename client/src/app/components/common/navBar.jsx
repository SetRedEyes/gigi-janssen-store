import { React } from "react"
import { Link, NavLink, useLocation } from "react-router-dom"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { useSelector } from "react-redux"
import { getCurrentUserData, getIsLoggedIn } from "../../store/user"
import SearchBar from "./searchBar"

const NavBar = () => {
    const { pathname } = useLocation()
    const currentUser = useSelector(getCurrentUserData())
    const isloggedIn = useSelector(getIsLoggedIn())
    console.log(currentUser)
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <NavLink
                    className="header-title text-decoration-none ms-5"
                    to={"/gigi-janssen-store"}
                >
                    GIGI & JANSSEN
                </NavLink>
                {pathname !== "/gigi-janssen-store/login" && <SearchBar />}

                <div className="d-flex me-5">
                    {isloggedIn && currentUser ? (
                        <div className="d-flex align-items-center">
                            <Link
                                to={"/gigi-janssen-store/profile"}
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
                            <NavLink to={"/gigi-janssen-store/login"}>
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
