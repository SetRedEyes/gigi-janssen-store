import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { logOut } from "../store/user"
import LoadingSpinner from "../components/common/loadingSpinner"

const LogOut = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(logOut())
    }, [])

    return <LoadingSpinner />
}

export default LogOut
