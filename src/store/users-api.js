import { api } from "./api";

export const usersApi = api.injectEndpoints({
    endpoints: (build) => ({
        getUser: build.mutation({
            query: () => ({
                url: "/users/me",
                method: "GET"
            }),
        }),
        logout: build.mutation({
            query: () => ({
                url: "/users/logout/",
                method: "POST",
                body: { refresh: localStorage.getItem("refreshToken") },
            }),
            invalidatesTags: ["users"],
        }),
        updateUser: build.mutation({
            query: (body) => ({
                url: "/users/me/",
                method: "PATCH",
                body,
            }),
            invalidatesTags: ["users"],
        }),
        registerUser: build.mutation({
            query: (body) => ({
                url: "/users/",
                method: "POST",
                body,
            }),
        }),
        changePassword: build.mutation({
            query: (body) => ({
                url: "/users/set_password/",
                method: "POST",
                body,
            }),
        }),
        resetPassword: build.mutation({
            query: (body) => ({
                url: "/users/reset_password/",
                method: "POST",
                body,
            }),
        }),
        confirmPassword: build.mutation({
            query: (body) => ({
                url: "/users/reset_password_confirm/",
                method: "POST",
                body,
            }),
        }),
    }),
});

export const {
    useGetUserMutation,
    useLogoutMutation,
    useUpdateUserMutation,
    useRegisterUserMutation,
    useChangePasswordMutation,
    useResetPasswordMutation,
    useConfirmPasswordMutation,
} = usersApi;
export const {
    endpoints: { getUser },
} = usersApi;
