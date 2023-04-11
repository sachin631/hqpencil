import React from 'react'
import ProductsBanner from './components/ProductsBanner'
import AllProducts from './components/AllProducts'

const Products = () => {
    return (
        <>
            <ProductsBanner tag="HQ PENCILS - A SKETCH STORE" line="Save more with coupons & up to 70% off!" />
            <AllProducts />
        </>
    )
}

export default Products