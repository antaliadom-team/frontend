import { api } from "./api";

export const objectsApi = api.injectEndpoints({
    endpoints: (build) => ({
        getObject: build.query({
            query: (id) => `/objects/${id}`,
        }),
        getAds: build.query({
            query: () => "/objects",
        }),
        getRent: build.query({
            query: () => ("/objects/?category=1"),
            providesTags: ["objects"],
        }),
        getBuy: build.query({
            query: () => ("/objects/?category=2"),
            providesTags: ["objects"],
        }),
        getFavourites: build.query({
            query: () => ("/objects/?is_favorited=1"),
            providesTags: ["objects"],
        }),
        getCategories: build.query({
            query: () => ("/objects/categories"),
        }),
        getLocations: build.query({
            query: () => ("/objects/locations"),
        }),
        getTypes: build.query({
            query: () => ("/objects/property_types"),
        }),
        getFacilities: build.query({
            query: () => ("/objects/facilities"),
        }),
        addFavourite: build.mutation({
            query: (id) => ({
                url: `/objects/${id}/favorite/`,
                method: "POST",
            }),
            invalidatesTags: ["objects"],
        }),
        deleteFavourite: build.mutation({
            query: (id) => ({
                url: `/objects/${id}/favorite/`,
                method: "DELETE",
            }),
            invalidatesTags: ["objects"],
        }),
        sendMainForm: build.mutation({
            query: (body) => ({
                url: `/objects/order/`,
                method: "POST",
                body,
            }),
        }),
        sendObjectForm: build.mutation({
            query: (data) => ({
                url: `/objects/${data.id}/order/`,
                method: "POST",
                body: data.body,
            }),
        }),
    }),
});

export const {
    useGetAdsQuery,
    useGetRentQuery,
    useGetBuyQuery,
    useGetFavouritesQuery,
    useGetCategoriesQuery,
    useGetLocationsQuery,
    useGetTypesQuery,
    useGetFacilitiesQuery,
    useGetObjectQuery,
    useAddFavouriteMutation,
    useDeleteFavouriteMutation,
    useSendMainFormMutation,
    useSendObjectFormMutation,
} = objectsApi;

export const {
    endpoints: { getObject },
} = objectsApi;
