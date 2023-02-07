import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appleApi = createApi({
    reducerPath: 'appleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000',
    }),
    endpoints: (builder) => ({
        getListApples: builder.query({
            query: () => `/flash-deals-products?cate=apple`,
        }),
        getListOrders: builder.query({
            query: () => 'orders',
        }),
    }),
});

export const { useGetListApplesQuery, useGetListOrdersQuery } = appleApi;
