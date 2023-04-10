import { api } from "./api";

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
            query: () => ({
                url: "/auth/jwt/verify/",
                method: "POST",
                body: { refresh: localStorage.getItem("refreshToken") },
            }),
            invalidatesTags: ["users"],
        }),
    }),
});

export const { useCreateTokenMutation, useRefreshTokenMutation, useVerifyTokenMutation } = jwtApi;
