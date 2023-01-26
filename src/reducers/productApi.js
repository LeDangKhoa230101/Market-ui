import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appleApi = createApi({
    reducerPath: 'appleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3000/flash-deals-products',
    }),
    endpoints: (builder) => ({
        getListApples: builder.query({
            query: () => `?cate=apple`,
        }),
    }),
});

export const { useGetListApplesQuery } = appleApi;
