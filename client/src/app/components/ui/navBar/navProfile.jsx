import React from "react"
import PropTypes from "prop-types"
import { PROFILE_ROUTE } from "../../../consts"

import { NavLink } from "react-router-dom"

const NavProfile = ({ currentUser }) => {
    return (
        <NavLink to={PROFILE_ROUTE} className="navProfile-name">
            {currentUser.firstName}
            <i className="bi bi-person-circle ms-2"></i>
        </NavLink>
    )
}

NavProfile.propTypes = {
    currentUser: PropTypes.object
}

export default NavProfile
