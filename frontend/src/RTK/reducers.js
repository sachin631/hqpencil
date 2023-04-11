import { createReducer } from "@reduxjs/toolkit";
import { getuserdetailsafterlogin } from "../services/apis";

const initialState = {
  c: 0,
};
export const getUserAfterLogin = createReducer(initialState, {
  getUserAfterLogin:async (state, action) => {
    const response = await getuserdetailsafterlogin();
  },
});
