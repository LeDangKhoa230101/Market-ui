import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: [],
    totalQuantity: 0,
    totalMoney: 0,
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            // tìm chỉ mục sản phẩm để check đã có sản phẩm đó trong giỏ hàng chưa
            const itemIndex = state.carts.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (itemIndex >= 0) {
                state.carts[itemIndex].totalQuantity += 1;
            } else {
                // nếu ko có trong giỏ hàng thì thêm sản phẩm đó làm mặt hàng mới
                const tempProduct = { ...action.payload, totalQuantity: 1 };
                state.carts.push(tempProduct);
            }
        },
    },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
