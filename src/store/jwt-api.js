import { api } from "./api";
import { getCookie } from "../helpers/cookie";


export const jwtApi = api.injectEndpoints({
    endpoints: (build) => ({
        createToken: build.mutation({
            query: (body) => ({
                url: "/auth/jwt/create/",
                method: "POST",
                body,
            }),
            invalidatesTags: ["users"],
        }),
        refreshToken: build.mutation({
            query: () => ({
                url: "/auth/jwt/refresh/",
                method: "POST",
                body: { refresh: localStorage.getItem("refreshToken") },
            }),
            invalidatesTags: ["users"],
        }),
        verifyToken: build.mutation({
            query: () => {
                const token = getCookie("accessToken");
                return {
                url: "/auth/jwt/verify/",
                method: "POST",
                body: { token: token },
            }},
            invalidatesTags: ["users"],
        }),
    }),
});

export const { useCreateTokenMutation, useRefreshTokenMutation, useVerifyTokenMutation } = jwtApi;
