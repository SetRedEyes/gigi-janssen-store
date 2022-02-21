import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        entities: []
    },
    reducers: {
        itemAdded: (state, action) => {
            state.entities.push(action.payload)
        },
        itemRemoved: (state, action) => {
            state.entities = state.entities.filter(
                (item) => item.volumeId !== action.payload
            )
        }
    }
})

const { reducer: cartReducer, actions } = cartSlice
export const { itemAdded, itemRemoved } = actions

export const getItemsInCart = () => (state) => state.cart.entities

export default cartReducer
