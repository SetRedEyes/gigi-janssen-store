import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import axios from "axios"
import { toast } from "react-toastify"
import { setTokens } from "../services/localStorage.service"

const httpAuth = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/",
  params: { key: process.env.REACT_APP_FIREBASE_KEY }
})
const AuthContext = React.createContext()

export const useAuth = () => {
  return useContext(AuthContext)
}

const AuthProvider = ({ children }) => {
  const [error, setError] = useState(null)

  async function logIn({ email, password }) {
    try {
      const { data } = await httpAuth.post(`accounts:signInWithPassword`, {
        email,
        password,
        returnSecureToken: true
      })
      setTokens(data)
    } catch (error) {
      errorCatcher(error)
      const { code, message } = error.response.data.error
      if (code === 400) {
        switch (message) {
          case "INVALID_PASSWORD":
            throw new Error("Email или пароль введены некорректно")

          default:
            throw new Error("Слишком много попыток входа. Попробуйте позднее.")
        }
      }
    }
  }

  async function signUp({ email, password }) {
    try {
      const { data } = await httpAuth.post(`accounts:signUp`, {
        email,
        password,
        returnSecureToken: true
      })
      setTokens(data)
    } catch (error) {
      errorCatcher(error)
      const { code, message } = error.response.data.error
      if (code === 400) {
        if (message === "EMAIL_EXISTS") {
          const errorObject = { email: "Пользователь с таким Email уже существует" }
          throw errorObject
        }
      }
    }
  }

  function errorCatcher(error) {
    const { message } = error.response.data.error
    setError(message)
  }

  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])

  return (
    <AuthContext.Provider value={{ signUp, logIn }}>{children}</AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
export default AuthProvider
