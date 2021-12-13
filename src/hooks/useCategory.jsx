import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import categoryService from "../services/category.service"
import { toast } from "react-toastify"
import LoadingSpinner from "../components/common/loadingSpinner"

const CategoryContext = React.createContext()

export const useCategory = () => {
  return useContext(CategoryContext)
}

export const CategoryProvider = ({ children }) => {
  const [categories, setCategories] = useState({})
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getCategories()
  }, [])

  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [null])

  async function getCategories() {
    try {
      const { content } = await categoryService.fetchAll()
      setCategories(content)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }

  const getCategoriesByCompany = (id) => {
    return categories[id]
  }

  function errorCatcher(error) {
    const { message } = error.response.data
    setError(message)
    setLoading(false)
  }
  return (
    <CategoryContext value={{ categories, getCategories, getCategoriesByCompany }}>
      {!isLoading ? children : <LoadingSpinner />}
    </CategoryContext>
  )
}

CategoryProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}
