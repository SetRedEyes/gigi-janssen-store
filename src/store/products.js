import { createSlice } from "@reduxjs/toolkit"
import productService from "../services/product.service"

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true
        },
        productsRecieved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { reducer: productsReducer, actions } = productsSlice

const { productsRequested, productsRecieved, productsRequestFailed } = actions

export const loadproductsList = () => async (dispatch) => {
    dispatch(productsRequested())
    try {
        const { content } = await productService.fetchAll()
        dispatch(productsRecieved(content))
    } catch (error) {
        dispatch(productsRequestFailed(error.message))
    }
}

export const getProducts = () => (state) => state.products.entities
export const getProductsLoadingStatus = () => (state) => state.products.isLoading
export const getProductsById = (id) => (state) => {
    if (state.products.entities) {
        return state.products.entities.find((q) => q.companyId === id)
    }
}

export default productsReducer
