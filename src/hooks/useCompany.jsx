import React, { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import LoadingSpinner from "../components/common/loadingSpinner"
import companyService from "../services/company.service"
import PropTypes from "prop-types"

const CompanyContext = React.createContext()

export const useCompany = () => {
  return useContext(CompanyContext)
}

export const CompanyProvider = ({ children }) => {
  const [companies, setCompanies] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCompanies()
  }, [])

  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])

  async function getCompanies() {
    try {
      const { data } = await companyService.fetchAll()
      setCompanies(data)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }

  function errorCatcher(error) {
    const { message } = error
    setError(message)
    setLoading(false)
  }

  return (
    <CompanyContext.Provider value={{ companies, getCompanies }}>
      {!isLoading ? children : <LoadingSpinner />}
    </CompanyContext.Provider>
  )
}

CompanyProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
