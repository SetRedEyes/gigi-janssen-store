import categoriesReducer from "./categories"
import companiesReducer from "./companies"

const { combineReducers, configureStore } = require("@reduxjs/toolkit")

const rootReducer = combineReducers({
    companies: companiesReducer,
    categories: categoriesReducer
})

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
