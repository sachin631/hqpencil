import React from 'react'
import Info from './components/Info'
import Order from './components/Order'

const Cart = () => {
    return (
        <>
            <div className='w-[80%] mb-10 mt-10 container mx-auto'>
                <h1 className='py-7 text-2xl font-bold'>Shopping Cart</h1>
                <div className='flex gap-20 max-md:grid'>
                        <Info />
                        <Order />
                </div>
            </div>
        </>
    )
}

export default Cart