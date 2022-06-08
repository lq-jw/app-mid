import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        cartList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state,action) {
            const newItem = action.payload;
            const existingItem = state.cartList.find((item) => item.id === newItem.id );

            if(existingItem) {
                existingItem.quantity ++;
                existingItem.totalPrice += newItem.price;
            }else {
                state.cartList.push({
                    id: newItem.id,
                    title: newItem.title,
                    authors: newItem.authors,
                    image_url: newItem.image_url,
                    num_pages: newItem.num_pages,
                    description: newItem.description,
                    rating: newItem.rating,
                    
                    price: newItem.num_pages,
                    quantity: 1,
                    //totalPrice: newItem.num_pages
                })
            }
            //state.totalQuantity++;
        },
        removeFromCart(state,action) {
            const id = action.payload;
            const existingItem = state.cartList.find(item => item.id === id.id);
            
            if(existingItem.quantity === 1){
                state.cartList = state.cartList.filter(item => item.id !== existingItem.id);
            } else {
                existingItem.quantity--;
                existingItem.totalPrice -= existingItem.price;
            }
        },
        setShowCart(state) {
            state.showCart = true;
        }
    }
});

export const cartActions = cartSlice.actions;
export default cartSlice;


