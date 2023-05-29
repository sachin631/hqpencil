import React, { useEffect, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { deleteFromTheCart, userCartData } from "../services/apis";
import { addToCart } from "../RTK/cartSlice";

const Order = () => {
const [cart,setCart]=useState();
const [deleteCart,setDeleteResponse]=useState();
const [priced,setPrice]=useState();
const dispatch=useDispatch();

  const cartIconButton = async () => {
    const responseee = await userCartData();
    console.log("userKiCartKAData", responseee);
    setCart(responseee);
    console.log("responseee",responseee.data.cartData)
    
  };
  dispatch(addToCart(cart));

  useEffect(()=>{
    
      cartIconButton();
    
    

  },[]);



  //delete from the cart data
 async function deleteFromCart(_id){
  const responseOfDelete=await deleteFromTheCart(_id);
  console.log("response3",responseOfDelete);
  // console.log("deletefromthecart",_id);
  setDeleteResponse(responseOfDelete);
  cartIconButton()
}

// console.log("try ti getting price from cart",cart.data.cartData.cart.product.price)
const TotalPrice=()=>{
  let price=0;
if (cart){
if (cart.data.cartData.cart){
  cart.data.cartData.cart.map((curelem)=>{
    price=curelem.product.price+price;
    setPrice(price);
  })

}
  

}
 
  
};

useEffect(()=>{
  TotalPrice();
  // cartIconButton()
},[cart])
console.log("pricesed",priced)

  if(!cart){
   return <h1>No items wait reload or add new items</h1>
  }else if(cart.data.cartData.cart.length==0){
    return <h1>cart is empty</h1>
  }
  console.log("cartiscart",cart.data.cartData.cart);

 
  




  return (
    <>
      <div>
        <h1 className="font-semibold py-5">Your Order</h1>
        <hr className="mb-5" />
        <div className="grid gap-10">
          {
            cart.data.cartData.cart.map((curelem) => {
              return ( 
                <div className="flex w-[220px] gap-3 justify-between">
                  <div className="bg-gray-100 rounded-md w-12">
                    <img
                      src={curelem.product.images[0].url}
                      alt="images"
                      className="h-16"
                    />
                  </div>
                  <div>
                    <h1 className="text-sm font-semibold">
                      {curelem.product.name}
                    </h1>
                    <div className="text-xs flex gap-2">
                      <p className="text-gray-500">Size</p>
                      <span className="font-semibold">1024 * 1024</span>
                    </div>
                    <h1>Quantity {curelem.quantity}</h1>
                    <h1 className="font-semibold">
                      RS {curelem.product.price}
                    </h1>
                    <h1>
                      Total Price : {curelem.product.price} x {curelem.quantity}
                      = {curelem.product.price * curelem.quantity}
                    </h1>
                  </div>
                  <div className="flex items-center text-xl">
                    <AiOutlineDelete className="cursor-pointer" onClick={()=>deleteFromCart(curelem.product._id)}/>
                  </div>
                </div>
               );
            })} 
          <div className="grid gap-2">
            <div className="flex text-sm justify-between">
              <span>Delivery</span>
              <p className="font-semibold">₹ 120</p>
            </div>
            <div className="flex text-sm justify-between">
              <span>Discount</span>
              <p className="font-semibold">₹ 300</p>
            </div>
          </div>
          <div className="flex text-xl font-semibold justify-between">
            <h2>Total</h2>
            <h1>₹ {priced}</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
