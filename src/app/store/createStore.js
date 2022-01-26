import usersReducer from "./users"
import categoriesReducer from "./categories"
import companiesReducer from "./companies"
import productsReducer from "./products"

const { combineReducers, configureStore } = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
    companies: companiesReducer,
    categories: categoriesReducer,
    products: productsReducer,
    users: usersReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
