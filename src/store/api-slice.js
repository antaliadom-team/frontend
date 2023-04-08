import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { getCookie } from "../services/api/cookie";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: "http://antalyadom.telfia.com/api",
    }),
    endpoints: (builder) => ({
        getAds: builder.query({
            query: () => ({
                url: "/objects",
                method: "GET"
            }),
        }),
        getRent: builder.query({
            query: (isAuth) => {
                if (isAuth) {
                    return {
                        url: "/objects/?category=1",
                        headers: {
                            Authorization: `Bearer ${getCookie("accessToken")}`,
                        },
                    };
                } else {
                    return "/objects/?category=1";
                }
            },
        }),
        getBuy: builder.query({
            query: (isAuth) => {
                if (isAuth) {
                    return {
                        url: "/objects/?category=2",
                        headers: {
                            Authorization: `Bearer ${getCookie("accessToken")}`,
                        },
                    };
                } else {
                    return "/objects/?category=2";
                }
            },
        }),
        getFavourites: builder.query({
            query: () => ({
                url: "/objects/?is_favorited=1",
                headers: {
                    Authorization: `Bearer ${getCookie("accessToken")}`,
                },
            }),
        }),
    }),
});

export const { useGetAdsQuery, useGetRentQuery, useGetBuyQuery, useGetFavouritesQuery } = apiSlice;
