import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appleApi = createApi({
    reducerPath: 'appleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints: (builder) => ({
        getListApples: builder.query({
            query: () => `/flash-deals-products?cate=phone`,
        }),
        getListOrders: builder.query({
            query: () => '/orders',
        }),
        getListBrandPhone: builder.query({
            query: (brand = '') => `/flash-deals-products?cate=phone${brand}`,
        }),
    }),
});

export const {
    useGetListApplesQuery,
    useGetListOrdersQuery,
    useGetListBrandPhoneQuery,
} = appleApi;
