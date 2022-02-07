import { createSlice } from "@reduxjs/toolkit"
import categoryService from "../services/category.service"

const categoriesSlice = createSlice({
    name: "categories",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        categoriesRequested: (state) => {
            state.isLoading = true
        },
        categoriesRecieved: (state, action) => {
            state.entities = action.payload.sort((a, b) =>
                a.name > b.name ? 1 : -1
            )
            state.isLoading = false
        },
        categoriesRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { reducer: categoriesReducer, actions } = categoriesSlice

const { categoriesRequested, categoriesRecieved, categoriesRequestFailed } = actions

export const loadCategoriesList = () => async (dispatch) => {
    dispatch(categoriesRequested())
    try {
        const { content } = await categoryService.fetchAll()
        dispatch(categoriesRecieved(content))
    } catch (error) {
        dispatch(categoriesRequestFailed(error.message))
    }
}

export const getCategories = () => (state) => state.categories.entities
export const getCategoriesLoadingStatus = () => (state) => state.categories.isLoading
export const getCategoriesByCompany = (name) => (state) => {
    if (state.categories.entities) {
        return state.categories.entities.filter((q) => q.companyName === name)
    }
}

export default categoriesReducer
