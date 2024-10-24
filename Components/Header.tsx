"use client"
import axios from 'axios';
import Image from 'next/image'
import React, { useState } from 'react'
import { toast } from 'react-toastify';

export const Header = () => {
const [email,setEmail]=useState("");
const onSubmitHandler=async (e)=>{
  e.preventDefault();
  const formData=new FormData();
  formData.append("email",email);
  const response=await axios.post('/api/email',formData);
  if(response.data.success){
    toast.success(response.data.msg);
    setEmail("");
  }else{
    toast.error("Eroor");
  }

}
  return (
    <div className='py-5 px-5 md:px-12 lg:px-28'>
      <div className='flex justify-between items-center'>
      <Image src='/bloglogo.png' width={130} height={60} className='w-[100px] sm:w-auto cursor-pointer' alt='logo' />
      <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 border border-black shadow-[-7px_7px_0px_#000000]'>Get started</button>
      </div>
      <div className='text-center my-8'>
        <div className='text-3xl sm:text-5xl font-medium'>Latest Blogs</div>
        <p className='mt-10 max-w-[740px] m-auto text-xs sm:text-base'>I’ve highlighted tips here, sharing my diverse interests in fashion, technology, lifestyle, and more!</p>
        <form onSubmit={onSubmitHandler} className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' action='#'>
        <input onChange={(e)=>setEmail(e.target.value)}value={email} type="email" placeholder='Enter your email' className='pl-4 outline-none' />
         <button type='submit' className='border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white '>Subscribe</button>
      </form>
      </div>
    </div>
  )
}
