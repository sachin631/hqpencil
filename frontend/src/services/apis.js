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


export const LogOut=async()=>{
    return await commonRequest("GET",`${BASE_URL}/logout`);
}


export const RegisterUser=async(data,config)=>{
    return await commonRequest("POST",`${BASE_URL}/registeruserpost`,data,config);
}

export const ADDTOCART=async(_id)=>{
    return await commonRequest("POST",`${BASE_URL}/addtocart/${_id}`);
}

export const userCartData=async()=>{
    return await commonRequest("GET",`${BASE_URL}/getcartdata`);
}

export const deleteFromTheCart=async(_id)=>{
    return await commonRequest("DELETE",`${BASE_URL}/delete/${_id}`);
}

export const contactUS=async(data)=>{
    return await commonRequest("POST",`${BASE_URL}/messageRouter`,data);
}



