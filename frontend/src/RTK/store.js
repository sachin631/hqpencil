import {configureStore} from "@reduxjs/toolkit";
import  AllPrductSliceReducers from "../RTK/AllProductSlice";
import UserAfterLoginSlice from "./UserAfterLoginSlice";


const store=configureStore({
    reducer:{
        AllPrductsReducer:AllPrductSliceReducers,
        UserAfterLoginSlice:UserAfterLoginSlice

    }
})

export default store;