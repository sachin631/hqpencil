import React, { useEffect, useState } from 'react'
import { AiOutlineLike, AiFillStar, AiOutlineStar } from 'react-icons/ai'
// import { FeaturedItems } from '../Data'
import { getAllProducts } from '../services/apis';
import {NavLink} from "react-router-dom"

const AllProducts = () => {

    const [getProduct,setGetProdutc]=useState([]);
    useEffect(async()=>{
        const getAllProduct=await getAllProducts();
        setGetProdutc(getAllProduct.data.ProductData);
    },[]);
    console.log(getProduct);
   
    return (
        <>
            <section className='w-[100%] py-10 mt-10'>
                <div className='w-[90%] container mx-auto'>
                    <div className='flex gap-[67px] flex-wrap justify-center mb-10'>
                        {
                            getProduct.map((curelem) => {
                                return (
                                    <div className='border-[1px] hover:shadow-lg p-3 rounded-3xl border-gray-300' key={curelem._id}>
                                        <div className='bg-gray-100 rounded-3xl p-3'>
                                          <NavLink to={`${curelem._id}`}> <img className='h-[200px] w-[200px]' src={curelem.images[0].url} /></NavLink>
                                        </div>
                                        {/* <p className='text-xs pt-3 text-green-500'>{curelem.Availability}</p> */}
                                        <h1 className='font-semibold'>{curelem.name}</h1>
                                        <div className='flex items-center justify-between'>
                                            <div>
                                                <div className='flex max-w-[170px] text-sm text-gray-500'>
                                                    {/* <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiFillStar />
                                                    <AiOutlineStar /> */}
                                                    {curelem.description}
                                                </div>
                                                <h1 className='font-bold'>{curelem.price}</h1>
                                            </div>
                                            <div className='cursor-pointer bg-red-100 rounded-3xl p-2 border-[1px] border-red-500'>
                                                <AiOutlineLike className='text-xl text-red-500' /><p className='text-xs text-center'>{curelem.numofReview}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                        }

                    </div>
                </div>
            </section>
        </>
    )
}

export default AllProducts