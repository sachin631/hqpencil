import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { LoginApi } from '../../services/apis';

const Login = () => {
    const [loginData,setLoginData]=useState({
        email:"",
        passWord:""
    });
    const navigate=useNavigate();

    const submitData=(event)=>{
        const {name,value}=event.target;
        setLoginData({...loginData,[name]:value});
    }

    const loginButton=async()=>{
        const {email,passWord}=loginData;
        if(email=="" || passWord==""){
            alert("please Enter full details");
        }
        const data= new FormData();
        data.append("email",email);
        data.append("passWord",passWord);

        const response=await LoginApi(data);
        console.log(response);  //problem arise is that always use variable name same in frontend and backend like passWord and emial
        if(response.status==200){
            navigate("/");
            alert("login Successfuly");
        }else{
            alert("something went wrong please enter vaild details or open the page again");
        }
    }
  

   
  return (
    <>
    <div className='mt-20'>
        <form className='flex justify-center items-center flex-col gap-5' onSubmit={(event)=>{
            event.preventDefault();
        }}>
            <label htmlFor='email'>Enter Your Email</label>
            <input type='text' placeholder='Email' name='email' value={loginData.email} onChange={submitData} className='border-solid border-[4px] pl-5' id="#email"/>
            <label htmlFor='password'>Enter Your PassWord</label>
            <input type='password' value={loginData.passWord} name='passWord'  onChange={submitData}  placeholder='PassWord' className='border-solid border-[4px] pl-5' id="#password"/>
            <button type='submit' className='px-2 py-2 bg-blue-500 text-white' onClick={loginButton}>LoginIN</button>
        </form>
     <NavLink to="/signup"><div className='text-center mt-8 mb-7'> new User Click here for SignUp</div></NavLink>  
    </div>
    </>
  )
}

export default Login