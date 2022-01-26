import React, { useEffect } from "react"
import LoadingSpinner from "../components/common/loadingSpinner"
import { useAuth } from "../hooks/useAuth"

const LogOut = () => {
    const { logOut } = useAuth()
    useEffect(() => {
        logOut()
    }, [])
    return <LoadingSpinner />
}

export default LogOut
