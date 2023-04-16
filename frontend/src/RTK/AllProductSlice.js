import { createSlice } from "@reduxjs/toolkit";


const AllPrductSlice=createSlice({
    name:"allPrdoucts",
    initialState:[],
    reducers:{
        getAllProductsData(state,action){
            state=action.payload;

        }
    }

});

export default AllPrductSlice.reducer;
export const {getAllProductsData} = AllPrductSlice.actions;
