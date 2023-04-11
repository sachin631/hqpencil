import axios from "axios";

export const commonRequest=async(methods,url,body,header)=>{
    let config={
        method:methods,
        url,
        data:body,
        headers:header? header:{
            "Content-Type":"application/json"
        },
        // data:body,
        withCredentials:true,
        credentials: "include"
    };

    //axios instence
    return axios(config).then((data)=>{
        return data;
    }).catch((error)=>{
        return error;
    })

}
