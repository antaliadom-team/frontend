import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
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

export const api = createApi({
    reducerPath: "api",
    tagTypes: ["objects"],
    baseQuery: baseQuery,
    endpoints: (build) => ({
        getTeam: build.query({
            query: () => ({
                url: "/static_pages/team/"
            })
        })
    }),
});

export const {
    useGetTeamQuery
} = api;