import React from 'react'
import { NavLink } from 'react-router-dom'

const AuctionBanner = () => {
    return (
        <>
            <section className='flex mt-16 bg-yellow-400 py-5'>
                <div className='flex w-[90%] gap-2 max-md:w-[96%] justify-between container mx-auto'>
                    <div className='flex'>
                        <img className='h-[300px] max-md:h-[150px] max-lg:h-[200px] border-8 max-md:border-4 border-yellow-500' src='ViratFull.jpeg' />
                        <div>
                            <h1 className='text-6xl w-fit max-lg:text-xl max-md:text-lg tracking-wide bg-black p-2 text-yellow-400 font-bold max-md:w-2/3'>#AUCTION</h1>
                            <h2 className='text-3xl max-lg:text-lg text-white px-2 max-md:text-sm font-bold tracking-wide'>FRIDAY</h2>
                            <h3 className='-rotate-12 p-8 max-lg:p-2 max-lg:text-lg text-2xl max-md:text-sm font-extrabold tracking-wide max-md:tracking-normal max-md:w-1/2'>DON'T MISS THE DEAL</h3>
                        </div>
                    </div>
                    <div className='flex flex-col w-1/6 justify-evenly'>
                        <u><h1 className='text-center tracking-widest text-2xl font-extrabold uppercase max-md:text-xs max-lg:text-lg'>Highly Detailed Virat Kohli Portrait Sketch</h1></u>
                        
                        <button className='bid-btn'><NavLink to='/auction'>Bid Now!</NavLink>
                        </button>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-xl max-md:text-xs max-lg:text-sm tracking-wide font-bold'>STARTING IN</h1>
                            <h2 className='text-red-600 max-md:text-sm max-lg:text-lg text-2xl font-extrabold tracking-widest'>00:33:20</h2>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AuctionBanner