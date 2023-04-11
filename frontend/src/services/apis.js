import { commonRequest } from "./apiCall";
import { BASE_URL } from "./helper";

export const getAllProducts=async()=>{
    return await commonRequest("GET",`${BASE_URL}/getallproducts`,"");

}

export const getParticularProduct=async(_id)=>{
    return await commonRequest("GET",`${BASE_URL}/particularproduct/${_id}`,"");
}

export const LoginApi=async(data)=>{
    return await commonRequest("POST",`${BASE_URL}/login`,data);
}


export const getuserdetailsafterlogin=async()=>{
    return await commonRequest("GET",`${BASE_URL}/getuserdetailsafterlogin`,"");
}



