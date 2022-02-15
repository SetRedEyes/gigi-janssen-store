import { createAction, createSlice } from "@reduxjs/toolkit"
import productService from "../services/product.service"
import isOutdated from "../utils/isOutDated"

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true
        },
        productsRecieved: (state, action) => {
            state.entities = action.payload
            state.lastFetch = Date.now()
            state.isLoading = false
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        productCreated: (state, action) => {
            state.entities.push(action.payload)
        }
    }
})

const { reducer: productsReducer, actions } = productsSlice

const {
    productsRequested,
    productsRecieved,
    productsRequestFailed,
    productCreated
} = actions

const addProductRequested = createAction("products/addProductRequested")

export const loadProductsList = () => async (dispatch, getState) => {
    const { lastFetch } = getState().products

    if (isOutdated(lastFetch)) {
        dispatch(productsRequested())

        try {
            const { content } = await productService.fetchAll()
            dispatch(productsRecieved(content))
        } catch (error) {
            dispatch(productsRequestFailed(error.message))
        }
    }
}

export const createProduct = (payload) => async (dispatch) => {
    dispatch(addProductRequested(payload))
    console.log("from redux", payload)
    try {
        const { content } = await productService.createProduct(payload)

        dispatch(productCreated(content))
    } catch (error) {
        dispatch(productsRequestFailed(error.message))
    }
}

export const getProducts = () => (state) => state.products.entities
export const getProductsLoadingStatus = () => (state) => state.products.isLoading
export const getProductById = (id) => (state) => {
    if (state.products.entities) {
        return state.products.entities.find((q) => q._id === id)
    }
}

export default productsReducer
