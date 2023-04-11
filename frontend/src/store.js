import {configureStore} from "@reduxjs/toolkit";
import { getUserAfterLogin } from "./RTK/reducers";

const store=configureStore({
    reducer:{
        getUserAfterLogin:getUserAfterLogin
    }

})

export default store;