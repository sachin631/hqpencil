import React, { useEffect } from 'react';
import { useState } from 'react';

const ProfileUpdate = () => {
  const [image,setImage]=useState();
  const [imagePreview,setImagePreview]=useState();
  const [changeData,setChangeData]=useState({
   
    name:"",
    phone:"",
    email:""
  })

  //fill all data of input except image
  const ONCHANGEDATA=(event)=>{
    const {name,value}=event.target;
    setChangeData({...changeData,[name]:value});
    console.log(changeData)

  }

  //take image data sepratly
  const ONCHANGEDATAImage=(event)=>{
    setImage(event.target.files[0]);
    console.log(image);
  }

  const submitButton=(event)=>{
    event.preventDefault();
  }

  useEffect(()=>{
    if(image){

      setImagePreview(URL.createObjectURL(image));

    }
   
  },[,image]);
  
  return (
   <>
   <form>
   <div className=' bg-red-300 flex flex-col justify-center items-center py-24 gap-4 min-h-screen'>
   <img src={imagePreview ? imagePreview :"/f5.png"} alt="profilePicOfUser" className='w-[100px] h-[100px] rounded-xl'/>

    <label>Enter your profile</label>
    <input type='file' name='file' className='rounded-lg px-4 bg-white py-3' onChange={ONCHANGEDATAImage}/>
    <label>Enter Your Name</label>
    <input type='text' name='name' placeholder='name' className='rounded-lg px-4'  onChange={ONCHANGEDATA}/>
    <label>Enter phoneNumber </label>
    <input type='text' name="phone" placeholder='Phone' className='rounded-lg px-4'  onChange={ONCHANGEDATA}/>
    <label>Enter Your Email</label>
    <input type='email' name='email' placeholder='Email' className='rounded-lg px-4'  onChange={ONCHANGEDATA}/>
    <button type='submit' className='bg-blue-500 px-3 py-3 rounded-md active:text-white' onClick={submitButton}>Update Now</button>
   </div>
   </form>
   </>
  )
}

export default ProfileUpdate