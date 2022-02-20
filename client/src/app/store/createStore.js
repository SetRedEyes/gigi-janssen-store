import userReducer from "./user"
import categoriesReducer from "./categories"
import companiesReducer from "./companies"
import productsReducer from "./products"
import cartReducer from "./cart"

const { combineReducers, configureStore } = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
    companies: companiesReducer,
    categories: categoriesReducer,
    products: productsReducer,
    user: userReducer,
    cart: cartReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
