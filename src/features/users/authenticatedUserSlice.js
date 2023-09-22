import { createSlice } from '@reduxjs/toolkit'

export const authenticatedUserSlice = createSlice({
    name: 'authenticatedUser',
    initialState: {
        value: '',
    },
    reducers: {
        setAuthenticatedUser: (state, action) => {
            state.value = action.payload
        },
        unsetAuthenticatedUser: (state, action) => {
            state.value = action.payload
        },
    }
})

export const { setAuthenticatedUser, unsetAuthenticatedUser } = authenticatedUserSlice.actions
export default authenticatedUserSlice.reducer