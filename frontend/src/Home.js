import React from 'react'
import HeroSection from './components/HeroSection'
import FlashSale from './components/FlashSale'
import AuctionBanner from './components/AuctionBanner'
import Featured from './components/Featured'
import Services from './components/Services'

const Home = () => {
    return (
        <>
            <div className='w-[100%]'>
                <HeroSection />
                <Services />
                <FlashSale />
                <AuctionBanner />
                <Featured />
            </div>
        </>
    )
}

export default Home