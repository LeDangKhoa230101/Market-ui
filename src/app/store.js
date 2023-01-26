import { configureStore } from '@reduxjs/toolkit';
import productsSlice, {
    productsFlashDealsFetch,
} from '~/reducers/productsFlashDealsSlice';
import cartSlice, { getTotalMoneys } from '~/reducers/cartSlice';
import { appleApi } from '~/reducers/productApi';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
    reducer: {
        productsFlashDeals: productsSlice,
        cart: cartSlice,
        [appleApi.reducerPath]: appleApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(appleApi.middleware),
});

store.dispatch(productsFlashDealsFetch());
store.dispatch(getTotalMoneys());

setupListeners(store.dispatch);
