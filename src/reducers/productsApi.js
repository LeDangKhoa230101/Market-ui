import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productsFlashDealsApi = createApi({
    reducerPath: 'productsFlashDealsApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000' }),
    endpoints: (builder) => ({
        getProductsFlashDeals: builder.query({
            query: () => '/flash-deals-products',
        }),
    }),
});

export const { useGetProductsFlashDealsQuery } = productsFlashDealsApi;
