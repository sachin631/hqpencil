import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const UserDetailsAfterLogin = () => {
  const userDataAfterLogin=  useSelector(state=>state.UserAfterLoginSlice);
  console.log("at new login page",userDataAfterLogin.data.userfound);
  if(!userDataAfterLogin.data.userfound){
    return <h1 className='mt-24'>No user Please Login</h1> 
  }
  return (
    <>
       <h1 className='text-center text-black text-[100px] mt-24'>User Details</h1>
        <div className='flex flex-col justify-center items-center gap-9 mb-24'>
            <figure className='text-center'>
                <img src={`http://localhost:6010/uploads/${userDataAfterLogin.data.userfound.avatar} `} alt="avatarImage" className='w-[100px] h-[100px] rounded-full'/>
            </figure>
            <h1>Your_ID : <span className='font-bold text-[20px]'>{userDataAfterLogin.data.userfound._id}</span></h1>
            <h1 className='text-center'> Name: <span className='font-bold text-[20px]'>{userDataAfterLogin.data.userfound.name}</span></h1>
            <h1 className='text-center'>PhoneNumber <span className='font-bold text-[20px]'>{userDataAfterLogin.data.userfound.phoneNumber}</span>  </h1>
            <h1 className='text-center'>Email : <span className='font-bold text-[20px]'> {userDataAfterLogin.data.userfound.email}</span></h1>
            <h1 className='text-center'>Role :<span className='font-bold text-[20px]'> {userDataAfterLogin.data.userfound.role}</span> </h1>
         <NavLink to="/profileupdate"> <button className='bg-green-500 text-white px-3 py-3 rounded'>Update</button> </NavLink>  
        </div>
    </>
    
  )
}

export default UserDetailsAfterLogin
