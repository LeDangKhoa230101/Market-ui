import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    carts: localStorage.getItem('carts')
        ? JSON.parse(localStorage.getItem('carts'))
        : [],
    totalMoneyFromCart: 0,
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
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        removeFromCart: (state, action) => {
            const itemIndex = state.carts.findIndex(
                (item) => item.id === action.payload.id,
            );
            if (state.carts[itemIndex].totalQuantity > 1) {
                state.carts[itemIndex].totalQuantity -= 1;
            } else if (state.carts[itemIndex].totalQuantity === 1) {
                // xóa phần tử click và trả về mảng mới
                const nextCartItems = state.carts.filter(
                    (cartItem) => cartItem.id !== action.payload.id,
                );
                //gán mảng hiện tại thành mảng mới
                state.carts = nextCartItems;
            }
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        removeItem: (state, action) => {
            // xóa phần tử click và trả về mảng mới
            const nextCartItems = state.carts.filter(
                (cartItem) => cartItem.id !== action.payload.id,
            );
            //gán mảng hiện tại thành mảng mới
            state.carts = nextCartItems;
            localStorage.setItem('carts', JSON.stringify(state.carts));
        },
        getTotalMoneys: (state, action) => {
            let { total } = state.carts.reduce(
                (cartTotal, cartItem) => {
                    const { curPrice, totalQuantity } = cartItem;
                    const itemTotal = curPrice * totalQuantity;

                    cartTotal.total += itemTotal;
                    return cartTotal;
                },
                { total: 0 },
            );
            state.totalMoneyFromCart = total;
        },
    },
});

export const { addToCart, removeFromCart, removeItem, getTotalMoneys } =
    cartSlice.actions;

export default cartSlice.reducer;
