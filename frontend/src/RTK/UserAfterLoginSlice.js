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

export default userdetailsafterloginSlice.reducer;
export const {AllUserDetails}=userdetailsafterloginSlice.actions;
