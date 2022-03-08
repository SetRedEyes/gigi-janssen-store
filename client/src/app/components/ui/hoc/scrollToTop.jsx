import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"

const ScrollToTop = ({ children }) => {
    const location = useLocation()

    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }, [location])
    return <>{children}</>
}

ScrollToTop.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default ScrollToTop
