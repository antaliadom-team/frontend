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
            query: () => "/objects/?category=1",
            providesTags: ["objects"],
        }),
        getNextRent: build.query({
            query: (page) => `/objects/?category=1&page=${page}`,
            providesTags: ["objects"],
        }),
        getNextBuy: build.query({
            query: (page) => `/objects/?category=2&page=${page}`,
            providesTags: ["objects"],
        }),
        getFilter: build.mutation({
            query: (data) => {
                return {
                    url: `/objects/?category=${data.category === "rent" ? "1" : "2"}${
                        data.property_type ? `&property_type=${data.property_type}` : ""
                    }${data.location ? `&location=${data.location}` : ""}${data.rooms ? `&rooms=${data.rooms}` : ""}`,
                    method: "GET",
                };
            },
            providesTags: ["objects"],
        }),
        getBuy: build.query({
            query: () => "/objects/?category=2",
            providesTags: ["objects"],
        }),
        getFavourites: build.query({
            query: (page) => `/objects/?is_favorited=1&page=${page}`,
            providesTags: ["objects"],
        }),
        getCategories: build.query({
            query: () => "/objects/categories",
        }),
        getLocations: build.query({
            query: () => "/objects/locations",
        }),
        getTypes: build.query({
            query: () => "/objects/property_types",
        }),
        getFacilities: build.query({
            query: () => "/objects/facilities",
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
    useGetNextRentQuery,
    useGetNextBuyQuery,
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
    useGetFilterMutation,
} = objectsApi;
