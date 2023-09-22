import { configureStore } from "@reduxjs/toolkit";
import authenticatedUserReducer from "../features/users/authenticatedUserSlice.js";

export default configureStore({
    reducer: {
        authenticatedUser: authenticatedUserReducer
    }
})