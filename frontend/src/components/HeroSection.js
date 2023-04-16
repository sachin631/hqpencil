import React from 'react'
import { NavLink } from 'react-router-dom'

const HeroSection = () => {
  return (
    <>
        <div className='w-[100%]'>
        <section className='mt-20 rounded-3xl flex bg-[#ececec] max-md:p-4 p-8 w-[90%] container mx-auto items-center'>
                    <div className='w-1/2 text-center'>
                        <p className='max-md:text-xs text-gray-500 tracking-widest'><u>ORDER YOUR PORTRAIT</u></p>
                        <h1 className='text-7xl max-md:text-3xl max-lg:text-5xl font-bold my-2'>CUSTOM</h1>
                        <p className='max-md:text-xs text-gray-500 tracking-widest'>PENCIL SKETCH</p>
                        <NavLink to='/custom'><button className='inline-block py-3 relative text-red-500 px-5 btn__submit rounded-md overflow-hidden text-sm max-md:text-xs font-bold transition-[.5s] mt-10'>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>ORDER NOW
                        </button></NavLink>
                    </div>
                    <div className='flex justify-center gap-[1px] w-1/2'>
                        <img className='h-[400px] max-sm:h-[180px] max-md:h-[250px] max-lg:h-[320px]' src='girl.png' />
                        <img className='max-lg:h-[320px] h-[400px] max-sm:h-[180px] max-md:h-[250px]' src='virat.png' />
                    </div>
                </section>
        </div>
    </>
  )
}

export default HeroSection