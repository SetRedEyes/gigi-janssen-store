import React from "react"
import PropTypes from "prop-types"
import { PROFILE_ROUTE } from "../../../consts"

import { Nav } from "react-bootstrap"

const NavProfile = ({ currentUser }) => {
    return (
        <Nav.Link href={PROFILE_ROUTE} className="navProfile-name">
            {currentUser.firstName}
            <i className="bi bi-person-circle align-items-center ms-2"></i>
        </Nav.Link>
    )
}

NavProfile.propTypes = {
    currentUser: PropTypes.object
}

export default NavProfile
