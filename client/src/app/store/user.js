import history from "../utils/history"
import { createAction, createSlice } from "@reduxjs/toolkit"
import authService from "../services/auth.service"
import localStorageService from "../services/localStorage.service"
import userService from "../services/user.service"
import { SHOP_ROUTE } from "../consts"
import { geterateAuthError } from "../utils/generateAuthError"

const initialState = localStorageService.getAccessToken()
    ? {
          entities: null,
          isLoading: true,
          error: null,
          auth: { userId: localStorageService.getUserId() },
          isLoggedIn: true
      }
    : {
          entities: null,
          isLoading: false,
          error: null,
          auth: null,
          isLoggedIn: false,
          dataLoaded: false
      }

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        currentUserRequested: (state) => {
            state.isLoading = true
        },
        currentUserRecieved: (state, action) => {
            state.entities = action.payload
            state.isLoading = false
        },
        currentUserRequestFailed: (state, action) => {
            state.error = action.payload
            state.isLoading = false
        },
        authRequestSuccess: (state, action) => {
            state.auth = action.payload
            state.isLoggedIn = true
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload
        },
        userLoggedOut: (state) => {
            state.entities = null
            state.isLoggedIn = false
            state.auth = null
            state.dataLoaded = false
        },
        userUpdateSuccessed: (state, action) => {
            state.entities = action.payload
        }
    }
})

const { reducer: userReducer, actions } = userSlice
const {
    authRequestSuccess,
    authRequestFailed,
    currentUserRequested,
    currentUserRecieved,
    currentUserRequestFailed,
    userLoggedOut,
    userUpdateSuccessed
} = actions

const authRequested = createAction("user/authRequested")
const userUpdateRequested = createAction("user/userUpdateRequested")
const userUpdateFailed = createAction("user/userUpdateFailed")

export const loadCurrentUser = () => async (dispatch) => {
    dispatch(currentUserRequested())
    try {
        const { content } = await userService.getCurrentUser()
        dispatch(currentUserRecieved(content))
    } catch (error) {
        currentUserRequestFailed(error.message)
    }
}

export const signUp = (payload) => async (dispatch) => {
    dispatch(authRequested())
    try {
        const data = await authService.register(payload)
        localStorageService.setTokens(data)
        dispatch(authRequestSuccess({ userId: data.userId }))
        history.push(SHOP_ROUTE)
    } catch (error) {
        dispatch(authRequestFailed(error.message))
    }
}

export const login =
    ({ payload, redirect }) =>
    async (dispatch) => {
        const { email, password } = payload
        dispatch(authRequested())
        try {
            const data = await authService.login({ email, password })
            localStorageService.setTokens(data)
            dispatch(authRequestSuccess({ userId: data.userId }))
            history.push(redirect)
        } catch (error) {
            const { code, message } = error.response.data.error
            if (code === 400) {
                const errorMessage = geterateAuthError(message)
                dispatch(authRequestFailed(errorMessage))
            } else {
                dispatch(authRequestFailed(error.message))
            }
        }
    }

export const logOut = () => (dispatch) => {
    localStorageService.removeAuthData()
    dispatch(userLoggedOut())
    history.push(SHOP_ROUTE)
}

export const updateUser = (payload) => async (dispatch) => {
    dispatch(userUpdateRequested())
    try {
        const { content } = await userService.update(payload)
        dispatch(userUpdateSuccessed(content))
    } catch (error) {
        dispatch(userUpdateFailed())
    }
}

export const getIsLoggedIn = () => (state) => state.user.isLoggedIn
export const getCurrentUserData = () => (state) => {
    return state.user.entities ? state.user.entities : null
}
export const getUserLoadingStatus = () => (state) => state.user.isLoading
export const getAuthErrors = () => (state) => state.user.error

export default userReducer
