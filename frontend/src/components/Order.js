import React from 'react'
import { AiOutlineDelete } from 'react-icons/ai'
import { CartItems } from '../Data'

const Order = () => {
    return (
        <>
            <div>
                <h1 className='font-semibold py-5'>Your Order</h1>
                <hr className='mb-5' />
                <div className='grid gap-10'>
                {
                    CartItems.map((cartitems)=>{
                        return(
                            <div className='flex w-[220px] gap-3 justify-between'>
                        <div className='bg-gray-100 rounded-md w-12'>
                            <img src={cartitems.Image} className='h-16' />
                        </div>
                        <div>
                            <h1 className='text-sm font-semibold'>{cartitems.Name}</h1>
                            <div className='text-xs flex gap-2'>
                                <p className='text-gray-500'>Size</p>
                                <span className='font-semibold'>{cartitems.Size}</span>
                            </div>
                            <h1 className='font-semibold'>{cartitems.Price}</h1>
                        </div>
                        <div className='flex items-center text-xl'>
                            <AiOutlineDelete className='cursor-pointer' />
                        </div>
                    </div>
                        )
                    })
                }
                    <div className='grid gap-2'>
                        <div className='flex text-sm justify-between'>
                            <span>Delivery</span>
                            <p className='font-semibold'>₹ 120</p>
                        </div>
                        <div className='flex text-sm justify-between'>
                            <span>Discount</span>
                            <p className='font-semibold'>₹ 300</p>
                        </div>
                    </div>
                    <div className='flex text-xl font-semibold justify-between'>
                        <h2>Total</h2>
                        <h1>₹ 4620</h1>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Order