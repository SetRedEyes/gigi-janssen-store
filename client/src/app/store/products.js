import { createAction, createSlice } from "@reduxjs/toolkit"
import productService from "../services/product.service"
import isOutdated from "../utils/isOutDated"
import history from "../utils/history"
import { ADMIN_ROUTE, SHOP_ROUTE } from "../consts"

const productsSlice = createSlice({
    name: "products",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        lastFetch: null,
        dataLoaded: false
    },
    reducers: {
        productsRequested: (state) => {
            state.isLoading = true
        },
        productsRecieved: (state, action) => {
            state.entities = action.payload
            state.dataLoaded = true
            state.lastFetch = Date.now()
            state.isLoading = false
        },
        productsRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        productCreated: (state, action) => {
            state.entities.push(action.payload)
        },
        productRemoved: (state, action) => {
            state.entities = state.entities.filter((c) => c._id !== action.payload)
        },
        productUpdated: (state, action) => {
            state.entities[
                state.entities.findIndex((p) => p._id === action.payload._id)
            ] = action.payload
        }
    }
})

const { reducer: productsReducer, actions } = productsSlice

const {
    productsRequested,
    productsRecieved,
    productsRequestFailed,
    productCreated,
    productRemoved,
    productUpdated
} = actions

const addProductRequested = createAction("products/addProductRequested")
const removeProductRequested = createAction("products/removeProductRequested")
const productUpdateFailed = createAction("products/productUpdateFailed")
const productUpdateRequested = createAction("products/productUpdateRequested")

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
    try {
        const { content } = await productService.createProduct(payload)

        dispatch(productCreated(content))
    } catch (error) {
        dispatch(productsRequestFailed(error.message))
    }
}

export const removeProduct = (productId) => async (dispatch) => {
    dispatch(removeProductRequested())
    try {
        const { content } = await productService.removeProduct(productId)
        if (!content) {
            dispatch(productRemoved(productId))
        }
    } catch (error) {
        dispatch(productsRequestFailed(error.message))
    }
}

export const updateProductData = (payload) => async (dispatch) => {
    dispatch(productUpdateRequested())
    try {
        const { content } = await productService.updateProduct(payload)
        dispatch(productUpdated(content))
        dispatch(loadProductsList())
        history.push(SHOP_ROUTE + ADMIN_ROUTE)
    } catch (error) {
        dispatch(productUpdateFailed(error.message))
    }
}

export const getProducts = () => (state) => state.products.entities

export const getProductById = (id) => (state) => {
    if (state.products.entities) {
        return state.products.entities.find((q) => q._id === id)
    }
}

export const getProductsLoadingStatus = () => (state) => state.products.isLoading

export const getDataStatus = () => (state) => state.products.dataLoaded

export default productsReducer
