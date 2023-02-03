import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
    datas: [],
    state: null,
};

export const shopsFetch = createAsyncThunk('shops/shopsFetch', async () => {
    const response = await axios.get('http://localhost:3000/shops');
    return response.data;
});

const shopsSlice = createSlice({
    name: 'shops',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(shopsFetch.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(shopsFetch.fulfilled, (state, action) => {
                state.status = 'success';
                state.datas = state.datas.concat(action.payload);
            })
            .addCase(shopsFetch.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export default shopsSlice.reducer;
