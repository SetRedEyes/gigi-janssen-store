import companiesReducer from "./companies"

const { combineReducers, configureStore } = require("@reduxjs/toolkit")

const rootReducer = combineReducers({ companies: companiesReducer })

export function createStore() {
    return configureStore({
        reducer: rootReducer
    })
}
