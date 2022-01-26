import { createAction, createSlice } from "@reduxjs/toolkit"
import authService from "../services/auth.service"
import localStorageService from "../services/localStorage.service"
import userService from "../services/user.service"
// import history from "../utils/history"

const usersSlice = createSlice({
    name: "user",
    initialState: {
        entities: null,
        isLoading: true,
        error: null,
        auth: null,
        isLoggedIn: false
    },
    reducers: {
        authRequestSuccess: (state, action) => {
            state.auth = { ...action.payload, isLoggedIn: true }
        },
        authRequestFailed: (state, action) => {
            state.error = action.payload
        },
        userCreated: (state, action) => {
            state.entities.push(action.payload)
        }
    }
})

const { reducer: usersReducer, actions } = usersSlice
const { authRequestSuccess, authRequestFailed, userCreated } = actions

const authRequested = createAction("users/authRequested")
const userCreateRequested = createAction("users/userCreateRequested")
const createUserFailed = createAction("users/createUserFailed")

export const signUp =
    ({ email, password, ...rest }) =>
    async (dispatch) => {
        dispatch(authRequested())
        try {
            const data = await authService.register({ email, password })
            localStorageService.setTokens(data)
            dispatch(authRequestSuccess({ userId: data.localId }))
            dispatch(
                createUser({
                    _id: data.localId,
                    email,
                    phone: "",
                    city: "",
                    postOfficeNumber: "",
                    ...rest
                })
            )
        } catch (error) {
            dispatch(authRequestFailed(error.message))
        }
    }

function createUser(payload) {
    return async function (dispatch) {
        dispatch(userCreateRequested())
        try {
            const { content } = await userService.create(payload)
            dispatch(userCreated(content))
            // history.push("/gigi-janssen-store")
        } catch (error) {
            dispatch(createUserFailed(error.message))
        }
    }
}

export default usersReducer
