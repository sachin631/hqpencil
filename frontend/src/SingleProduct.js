import React, { useEffect, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import { useParams } from "react-router-dom";
import { getParticularProduct } from "./services/apis";


const SingleProduct = () => {
  

  const [singleProductData, setSingleProductData] = useState();
  const { _id } = useParams();
  useEffect(() => {
    async function fecthData() {
      const particularProductData = await getParticularProduct(_id);
      setSingleProductData(particularProductData.data.message);
    }
    fecthData();
  }, []);
  console.log(singleProductData);

  return (
    <>
      {singleProductData ? (
        <div className="mt-10 py-10 w-[85%] container mx-auto">
          <h1 className="text-xl font-semibold pb-10">
            {singleProductData.category} / {singleProductData.name}
          </h1>
          <div className="flex max-sm:grid max-md:gap-10 gap-20">
            <div className="w-1/3 max-lg:w-1/2 max-sm:w-[100%]">
              {/* carosel */}
              

              <img
                className="h-[500px] w-full bg-gray-100 rounded-3xl p-5"
                src={`${singleProductData.images[0].url}`}
                
              />
             
            </div>
            <div className="flex flex-col gap-2 w-1/2 max-sm:w-[100%]">
              {/* <span className="text-green-400">flashsale.Availability</span> */}
              <h1 className="text-xl font-semibold">
                {singleProductData.name}
              </h1>
              <div className="flex text-yellow-500 gap-2 items-center">
                <AiFillLike />
                <p className="text-green-600 font-semibold">
                  {singleProductData.numofReview}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="text-gray-500 font-semibold">
                  {/* <strike>flashsale.Strike</strike> */}
                </p>
                <h2 className="text-2xl text-red-400 font-bold">
                  RS/ {singleProductData.price}
                </h2>
                {/* <div className="border-2 border-red-600 py-1 px-4 rounded-full text-red-600">
           <span className="text-xs font-bold">flashsale.Discount</span>
         </div> */}
              </div>
              <div className="py-2">
                <h1 className="font-semibold py-2 text-lg">Select Frame</h1>
                <div className="flex gap-4">
                  {/* {
                                               FrameImg.map((frameimg) => {
                                                   return ( */}
                  <img
                    src="frameimg.Image"
                    alt="Frame 1"
                    className="h-[150px] cursor-pointer hover:border-2 hover:shadow-md"
                  />
                  {/* )
                                               })
                                           } */}
                </div>
              </div>
              <div className="my-4">
                <button class="btn">Add to Cart</button>
              </div>
              <div className="flex py-5 gap-5">
                <div className="w-1/2">
                  <h1 className="font-semibold">Information</h1>
                  <table>
                    <tr className="flex max-md:gap-10 gap-20">
                      <td>Type</td>
                      <td>{singleProductData.category}</td>
                    </tr>
                    <tr className="flex max-md:gap-10 gap-20">
                      <td>Size</td>
                      <td>flashsale.Size</td>
                    </tr>
                    {/* <tr className="flex max-md:gap-10 gap-20">
               <td>Type</td>
               <td>flashsale.Type</td>
             </tr> */}
                  </table>
                </div>
                <div className="w-1/2">
                  <h1 className="font-semibold">Description</h1>
                  <p className="text-sm text-gray-500">
                    {singleProductData.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        "..................................................................................................."
      )}
    </>
  );
};

export default SingleProduct;
