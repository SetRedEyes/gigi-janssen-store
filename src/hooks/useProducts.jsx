import React, { useContext, useEffect, useState } from "react"
import PropTypes from "prop-types"
import productService from "../services/product.service"
import { toast } from "react-toastify"
import LoadingSpinner from "../components/common/loadingSpinner"

const ProductContext = React.createContext()

export const useProduct = () => {
  return useContext(ProductContext)
}

const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([])
  const [isLoading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    getProductsList()
  }, [])
  useEffect(() => {
    if (error !== null) {
      toast(error)
      setError(null)
    }
  }, [error])

  async function getProductsList() {
    try {
      const { data } = await productService.fetchAll()
      setProducts(data)
      setLoading(false)
    } catch (error) {
      errorCatcher(error)
    }
  }

  const getProduct = (id) => {
    return products.find((p) => p._id === id)
  }

  function errorCatcher(error) {
    const { message } = error.response.data.error
    setError(message)
    setLoading(false)
  }
  return (
    <ProductContext.Provider value={{ products, getProduct }}>
      {!isLoading ? children : <LoadingSpinner />}
    </ProductContext.Provider>
  )
}

ProductProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node])
}

export default ProductProvider
