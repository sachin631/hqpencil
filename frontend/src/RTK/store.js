import {configureStore} from "@reduxjs/toolkit";
import  AllPrductSliceReducers from "../RTK/AllProductSlice";
import UserAfterLoginSlice from "./UserAfterLoginSlice";
import cartSlice from "./cartSlice";


const store=configureStore({
    reducer:{
        AllPrductsReducer:AllPrductSliceReducers,
        UserAfterLoginSlice:UserAfterLoginSlice,
        cartSlice:cartSlice

    } 
})

export default store;