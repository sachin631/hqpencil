import React from 'react'
import FlashSaleItems from '../Data'
import { AiOutlineLike, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { NavLink } from 'react-router-dom'

const FlashSale = () => {
    return (
        <>
            <section>
                <div className='w-[90%] container mx-auto'>
                    <div className='flex justify-between'>
                        <h1 className='text-xl font-semibold'>Flash Sale</h1>
                        <p>Offer ends in <span className='text-red-500 font-bold'>12 : 00 : 00</span></p>
                    </div>
                    <div className='flex flex-wrap gap-[67px] justify-center my-6'>
                        {
                            FlashSaleItems.map((flashsale) => {
                                return (
                                    <NavLink to={`/${flashsale.Id}`}>
                                    <div className='border-[1px] hover:shadow-lg p-3 rounded-3xl border-gray-300 cursor-pointer'>
                                        <div className='bg-gray-100 rounded-3xl p-3'>
                                            <img className='h-[200px] w-[200px]' src={flashsale.Image} />
                                        </div>
                                        <p className='text-xs pt-3 text-green-500'>{flashsale.Availability}</p>
                                        <h1 className='font-semibold'>{flashsale.Name}</h1>
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <div className='flex text-yellow-400'>
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiOutlineStar />
                                                </div>
                                                <h1 className='font-bold'>{flashsale.Price}</h1>
                                            </div>
                                            <div className='cursor-pointer bg-red-100 rounded-3xl p-2 border-[1px] border-red-500'>
                                                <AiOutlineLike className='text-2xl text-red-500' /><p className='text-xs text-center'>{flashsale.Likes}</p>
                                            </div>
                                        </div>
                                    </div>
                                    </NavLink>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default FlashSale