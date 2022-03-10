import { React } from "react"
import { useSelector } from "react-redux"
import { getCurrentUserData, getIsAdmin, getIsLoggedIn } from "../../../store/user"

import { Container, Nav, Navbar } from "react-bootstrap"
import CartButton from "../cart/cartButton"
import SearchBar from "../searchBar"
import NavProfile from "./navProfile"
import LoginButton from "./loginButton"
import AdminButton from "./adminButton"
import NavbarTitle from "./navTitle"

const NavBar = () => {
    const currentUser = useSelector(getCurrentUserData())
    const isAdmin = useSelector(getIsAdmin())
    const isloggedIn = useSelector(getIsLoggedIn())
    return (
        <Navbar bg="dark" expand="md" className="navbar-dark ">
            <Container fluid>
                <NavbarTitle />

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav
                        className="flex-center ms-auto my-2 my-md-0 "
                        style={{ maxHeight: "11rem" }}
                    >
                        <SearchBar />

                        {isloggedIn && currentUser ? (
                            isAdmin ? (
                                <>
                                    <div className="navbar-items__wrapper">
                                        <CartButton />
                                        <NavProfile currentUser={currentUser} />
                                    </div>
                                    <AdminButton />
                                </>
                            ) : (
                                <div className="navbar-items__wrapper">
                                    <CartButton />
                                    <NavProfile currentUser={currentUser} />
                                </div>
                            )
                        ) : (
                            <>
                                <CartButton />
                                <LoginButton />
                            </>
                        )}
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar
