import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "./users-api";

const initialState = {
    user: null,
    isAuth: false,
};

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        logoutUser: () => initialState,
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuth = true;
        },
    },
    extraReducers: (builder) => {
        builder
            .addMatcher(usersApi.endpoints.getUser.matchFulfilled, (state, action) => {
                state.user = action.payload;
                state.isAuth = true;
            })
            .addMatcher(usersApi.endpoints.getUser.matchRejected, (state) => {
                state.isAuth = false;
            });
    },
});

export const { logoutUser, setUser } = userSlice.actions;

export default userSlice.reducer;
