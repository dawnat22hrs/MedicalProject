import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface AuthState {
    authData: {
        accessToken: string | null
        isLoading: boolean
        error: string | null
    }
}

const initialState: AuthState = {
    authData: {
        accessToken: null,
        isLoading: false,
        error: null,
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        loginStart: (state): AuthState => ({
            ...state,
            authData: {
                ...state.authData,
                isLoading: true,
            }
        }),
        loginSuccess: (state, action: PayloadAction<string>): AuthState => ({
            ...state,
            authData: {
                ...state.authData,
                accessToken: action.payload,
                isLoading: false,
                error: null,
            }
        }),
        loginFailure: (state, action: PayloadAction<string>): AuthState => ({
            ...state,
            authData: {
                ...state.authData,
                isLoading: false,
                error: action.payload,
            }
        }),
        logoutSuccess: (): AuthState => initialState,
    }
})

export const  { loginStart, loginSuccess, loginFailure, logoutSuccess } = authSlice.actions
export default authSlice.reducer
