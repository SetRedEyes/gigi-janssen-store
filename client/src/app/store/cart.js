import { createAction, createSlice } from "@reduxjs/toolkit"
import localStorageService from "../services/localStorage.service"

const initialState = localStorage.getItem("cart")
    ? {
          entities: JSON.parse(localStorage.getItem("cart")),
          isLoading: true,
          error: null
      }
    : { entities: [], isLoading: true, error: null }

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        itemsRequested: (state) => {
            state.isLoading = true
        },

        itemsRecieved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        itemAdded: (state, action) => {
            state.entities.push(action.payload)
        },
        itemRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (item) => item.volumeId !== action.payload
            )
        },
        allItemsRemoved: (state) => {
            state.entities = initialState
        },
        itemsRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { reducer: cartReducer, actions } = cartSlice
export const {
    itemsRecieved,
    itemAdded,
    itemRemoved,
    itemsRequestFailed,
    itemsRequested,
    allItemsRemoved
} = actions

const addItemRequested = createAction("cart/addItemRequested")
const removeItemRequested = createAction("cart/removeItem")
const removeAllItemsRequested = createAction("cart/removeAllItems")

export const loadCartList = () => async (dispatch) => {
    dispatch(itemsRequested())

    try {
        const cart = await localStorageService.getCartItems()
        dispatch(itemsRecieved(cart))
    } catch (error) {
        dispatch(itemsRequestFailed(error.message))
    }
}

export const addItemToCart = (payload) => async (dispatch) => {
    dispatch(addItemRequested())
    try {
        const cart = await localStorageService.getCartItems()

        const duplicates = cart.filter((item) => item.volumeId === payload.volumeId)

        if (duplicates.length === 0) {
            const itemToAdd = { ...payload, count: 1, totalPrice: payload.price }
            cart.push(itemToAdd)
            localStorage.setItem("cart", JSON.stringify(cart))
            dispatch(itemAdded(...cart))
        }
    } catch (error) {
        dispatch(itemsRequestFailed(error.message))
    }
}

export const removeItemFromCart = (itemId) => async (dispatch) => {
    dispatch(removeItemRequested())

    try {
        const cart = await localStorageService.getCartItems()
        const updatedCart = await cart.filter((item) => item.volumeId !== itemId)
        localStorage.setItem("cart", JSON.stringify(updatedCart))
        dispatch(itemRemoved(itemId))
    } catch (error) {
        dispatch(itemsRequestFailed(error.message))
    }
}

export const removeAllItems = () => async (dispatch) => {
    dispatch(removeAllItemsRequested())
    dispatch(allItemsRemoved())
    localStorage.removeItem("cart")
}

export const getCartItems = () => (state) => {
    if (state.cart.entities) {
        return state.cart.entities
    }
}

export default cartReducer
