import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import LoadingSpinner from "../components/common/loadingSpinner"
import { logOut } from "../store/user"

const LogOut = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(logOut())
    }, [])
    return <LoadingSpinner />
}

export default LogOut
