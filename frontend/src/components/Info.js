import React from 'react'
import { MdPayments } from 'react-icons/md';
import { AiOutlineCheck, AiFillGift } from 'react-icons/ai'

const Info = () => {
  return (
    <>
      <section>
        <div className='grid gap-4'>
          <div className='flex gap-20 justify-between border-[1px] border-gray-300 rounded-lg py-3 px-5'>
            <div>
              <div className='flex items-center gap-1'>
                <h2>LOGIN</h2>
                <AiOutlineCheck />
              </div>
              <div className='flex gap-4 text-sm font-semibold'>
                <p>Vaibhav Kaushik</p>
                <p>+919876543210</p>
              </div>
            </div>
            <div className='flex items-center'>
              <button className='bg-gray-100 text-xs font-semibold px-4 py-2'>CHANGE</button>
            </div>
          </div>
          <div className='flex justify-between gap-20 border-[1px] border-gray-300 rounded-lg py-3 px-5'>
            <div>
              <div className='flex items-center gap-1'>
                <h2>SHIPPING ADDRESS</h2>
                <AiOutlineCheck />
              </div>
              <div className='flex gap-4 text-sm font-semibold'>
                <p>Brady Cooper, New Civil Colony, Salt Lake City, Utah United States, 2971 Avenue.</p>
              </div>
            </div>
            <div className='flex items-center'>
              <button className='bg-gray-100 text-xs font-semibold px-4 py-2'>CHANGE</button>
            </div>
          </div>
        </div>
        <div>
          <div className='flex gap-3 bg-gray-100 p-3 my-4'>
            <MdPayments />
            <p className='font-semibold text-sm'>PAYMENT METHOD</p>
          </div>
          <div>
            <div>
              <label className='text-sm'>Enter UPI Address *</label>
              <div className='flex gap-2'>
                <input type='text' className='border-[1px] border-gray-400 px-4 py-2 rounded-md' />
                <button className='bg-gray-600 text-sm font-semibold text-white py-2 px-4 rounded-md'>Pay ₹4620</button>
              </div>
            </div>
            <span className='text-xs'>Your details would be securely saved for faster payments</span>
          </div>
          <div className='flex gap-3 bg-gray-100 p-3 my-4'>
            <AiFillGift />
            <p className='font-semibold text-sm'>COUPONS</p>
          </div>
          <div>
            <div>
              <label className='text-sm'>Enter Coupon</label>
              <div className='flex gap-2'>
                <input type='text' className='border-[1px] border-gray-400 px-4 py-2 rounded-md' />
                <button className='bg-yellow-600 text-sm font-semibold text-white py-2 px-4 rounded-md'>Apply</button>
              </div>
            </div>
            <span className='text-xs'>Enter coupon to get extra discount</span>
          </div>

        </div>
      </section>
    </>
  )
}

export default Info