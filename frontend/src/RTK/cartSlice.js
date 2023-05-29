import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice(
    {
        name:"cartSlice",
        initialState:[],
        reducers:{
            addToCart(state,action){
                return action.payload;
            },

            removeFromCart(state,action){

            }
        }
    }
);
export default cartSlice.reducer;
export const {addToCart,removeFromCart}=cartSlice.actions;
