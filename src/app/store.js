import { configureStore } from '@reduxjs/toolkit';
import productsSlice, {
    productsFlashDealsFetch,
} from '~/reducers/productsFlashDealsSlice';
import cartSlice from '~/reducers/cartSlice';
import { productsFlashDealsApi } from '~/reducers/productsApi';

export const store = configureStore({
    reducer: {
        productsFlashDeals: productsSlice,
        cart: cartSlice,
        [productsFlashDealsApi.reducerPath]: productsFlashDealsApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsFlashDealsApi.middleware),
});

store.dispatch(productsFlashDealsFetch());
