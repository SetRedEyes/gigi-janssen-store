import { createSlice } from "@reduxjs/toolkit"
import companyService from "../services/company.service"

const companiesSlice = createSlice({
    name: "companies",
    initialState: {
        entities: null,
        isLoading: true,
        error: null
    },
    reducers: {
        companiesRequested: (state) => {
            state.isLoading = true
        },
        companiesRecieved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        companiesRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        }
    }
})

const { reducer: companiesReducer, actions } = companiesSlice

const { companiesRequested, companiesRecieved, companiesRequestFailed } = actions

export const loadCompaniesList = () => async (dispatch) => {
    dispatch(companiesRequested())
    try {
        const { content } = await companyService.fetchAll()
        dispatch(companiesRecieved(content))
    } catch (error) {
        dispatch(companiesRequestFailed(error.message))
    }
}

export const getCompanies = () => (state) => state.companies.entities

export const getCompaniesLoadingStatus = () => (state) => state.companies.isLoading

export default companiesReducer
