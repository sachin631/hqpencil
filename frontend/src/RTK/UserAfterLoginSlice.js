import { createSlice } from "@reduxjs/toolkit";

const userdetailsafterloginSlice=createSlice({
    name:"afterLoginSliceNAme",
    initialState:{},
    reducers:{

        AllUserDetails(state,action){
            return action.payload;
    
        }

    }
    
});

//we have to exeport reducer and actions
export default userdetailsafterloginSlice.reducer;  //reducer is property 
export const {AllUserDetails}=userdetailsafterloginSlice.actions; // actions is a property 
