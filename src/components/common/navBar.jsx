import { React } from "react"
import { Button, Container, Nav, Navbar } from "react-bootstrap"
import { NavLink, useLocation } from "react-router-dom"
import { useAuth } from "../../hooks/useAuth"
import NavProfile from "./navProfile"
import SearchBar from "./searchBar"

const NavBar = () => {
    const { pathname } = useLocation()
    const { currentUser } = useAuth()
    // const [auth, setAuth] = useState(false)
    return (
        <Navbar bg="dark" variant="dark" sticky="top">
            <Container fluid>
                <NavLink
                    className="header-title text-decoration-none ms-5"
                    to={"/online-store-v2"}
                >
                    GIGI & JANSSEN
                </NavLink>
                {pathname !== "online-store-v2/login" && <SearchBar />}
                {/* {auth ? (
          <Nav style={{ color: "white" }}>
            <Button variant={"outline-light"}>Админ панель</Button>
            <Button variant={"outline-light"} className="ms-2">
              Войти
            </Button>
          </Nav>
        ) : ( */}

                <div className="d-flex me-5">
                    {currentUser ? (
                        <NavProfile />
                    ) : (
                        <Nav>
                            <NavLink
                                // onClick={() => setAuth(true)}
                                to={"/online-store-v2/login"}
                            >
                                <Button
                                    variant={"outline-light"}
                                    className="navlink-btn"
                                >
                                    Авторизация
                                </Button>
                            </NavLink>
                        </Nav>
                    )}
                </div>
                {/* )} */}
            </Container>
        </Navbar>
    )
}

export default NavBar
