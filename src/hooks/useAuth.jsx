import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { toast } from "react-toastify"

const httpAuth = axios.create()
const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const TOKEN_KEY = "jwt-token"
const REFRESH_KEY = "jwt-refresh-token"
const EXPIRES_KEY = "jwt-expires"

const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null)

  function setTokens({ refreshToken, idToken, expiresIn = 3600 }) {
    const expiresDate = new Date().getTime() + expiresIn * 1000
    localStorage.setItem(TOKEN_KEY, idToken)
    localStorage.setItem(REFRESH_KEY, refreshToken)
    localStorage.setItem(EXPIRES_KEY, expiresDate)
  }

  async function signUp({ email, password }) {
    const key = "AIzaSyA4rxfniv5J3Mx_jCfnoUZY7SW-CtDkVYY"
    const url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${key}`

    try {
      const { data } = await httpAuth.post(url, {
        email,
        password,
        returnSecureToken: true
      })
      console.log(data)
      setTokens(data)
    } catch (error) {
      errorCatcher(error)
    }
  }

  function errorCatcher(error) {
    const { message } = error
    setError(message)
  }

  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])

  return <AuthContext.Provider value={{ signUp }}>{children}</AuthContext.Provider>
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
export default AuthProvider