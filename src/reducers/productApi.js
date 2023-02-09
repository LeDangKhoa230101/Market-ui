import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appleApi = createApi({
    reducerPath: 'appleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/flash-deals-products',
    }),
    endpoints: (builder) => ({
        getListApples: builder.query({
            query: () => `?cate=phone`,
        }),
        getListOrders: builder.query({
            query: () => 'orders',
        }),
        getListBrandPhone: builder.query({
            query: (brand = '') => `?cate=phone${brand}`,
        }),
    }),
});

export const {
    useGetListApplesQuery,
    useGetListOrdersQuery,
    useGetListBrandPhoneQuery,
} = appleApi;
