import React from 'react'

const Services = () => {
    return (
        <>
            <section>
                <div className='flex w-[90%] flex-wrap gap-2 container mx-auto justify-between my-14'>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img className='h-12' src='f2.png' />
                        </div>
                        <div>
                            <h1 className='font-semibold'>Delivery</h1>
                            <p className='text-sm text-gray-400'>Fastest delivery on all orders</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img className='h-12' src='f3.png' />
                        </div>
                        <div>
                            <h1 className='font-semibold'>Save Money</h1>
                            <p className='text-sm text-gray-400'>Extra Discount on all products</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img className='h-12' src='f5.png' />
                        </div>
                        <div>
                            <h1 className='font-semibold'>Customer Satisfaction</h1>
                            <p className='text-sm text-gray-400'>Best Quality Products</p>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div>
                            <img className='h-12' src='f6.png' />
                        </div>
                        <div>
                            <h1 className='font-semibold'>Support</h1>
                            <p className='text-sm text-gray-400'>24/7 Hours Online Support</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Services