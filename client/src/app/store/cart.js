import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        entities: null
    },
    reducers: {
        itemAdded: (state, action) => {
            state.entities.push(action.payload)
        },
        itemRemoved: (state, action) => {
            state.entities = state.entities.filter((c) => c._id !== action.payload)
        }
    }
})

const { reducer: cartReducer } = cartSlice
// const { itemAdded, itemRemoved } = actions

export default cartReducer
