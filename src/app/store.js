import { configureStore } from '@reduxjs/toolkit';
import productsSlice, {
    productsFlashDealsFetch,
} from '~/reducers/productsFlashDealsSlice';
import cartSlice, { getTotalMoneys } from '~/reducers/cartSlice';

export const store = configureStore({
    reducer: {
        productsFlashDeals: productsSlice,
        cart: cartSlice,
    },
});

store.dispatch(productsFlashDealsFetch());
store.dispatch(getTotalMoneys());
