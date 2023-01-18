import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    items: [],
    status: null,
    error: null,
};

export const productsFlashDealsFetch = createAsyncThunk(
    'productsFlashDeals/productsFlashDealsFetch',
    async () => {
        const response = await axios.get(
            'http://localhost:3000/flash-deals-products',
        );
        return response.data;
    },
);

const productsFlashDealsSlice = createSlice({
    name: 'productsFlashDeals',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(productsFlashDealsFetch.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(productsFlashDealsFetch.fulfilled, (state, action) => {
                state.status = 'success';
                state.items = state.items.concat(action.payload);
            })
            .addCase(productsFlashDealsFetch.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default productsFlashDealsSlice.reducer;
