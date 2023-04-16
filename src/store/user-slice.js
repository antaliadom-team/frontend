import { createSlice } from "@reduxjs/toolkit";
import { usersApi } from "./users-api";
import { jwtApi } from "./jwt-api";
import { setCookie } from "../helpers/cookie";

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
        setAuth: (state) => {
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
            })
            .addMatcher(jwtApi.endpoints.verifyToken.matchFulfilled, () => {
                // console.log("matcher verifyToken fulfilled");
            })
            .addMatcher(jwtApi.endpoints.verifyToken.matchRejected, () => {
                // console.log("matcher verifyToken rejected");
            })
            .addMatcher(jwtApi.endpoints.refreshToken.matchFulfilled, (state, action) => {
                // console.log("matcher refreshToken fulfilled");
                setCookie("accessToken", action.payload.access, undefined);
                localStorage.setItem("refreshToken", action.payload.refresh);
            })
            .addMatcher(jwtApi.endpoints.refreshToken.matchRejected, (state) => {
                // console.log("matcher refreshToken rejected");
                state.isAuth = false;
            });
    },
});

export const { logoutUser, setUser, setAuth } = userSlice.actions;

export default userSlice.reducer;
