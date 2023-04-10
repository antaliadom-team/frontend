import { createApi, fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import { getCookie } from "../helpers/cookie";

const baseQuery = fetchBaseQuery({
    baseUrl: "http://antalyadom.telfia.com/api",
    prepareHeaders: (headers) => {
        const token = getCookie("accessToken");
        if (token) {
            headers.set("Authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithRetry = retry(baseQuery, { maxRetries: 6 })

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["objects", "users"],
    baseQuery: baseQueryWithRetry,
    endpoints: () => ({}),
});
