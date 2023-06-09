import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { LogOut, getuserdetailsafterlogin } from "../services/apis";

const Nav = () => {
  const [responsed, setResponsed] = useState();
  const navigate=useNavigate();
  useEffect(() => {
    async function fecthData() {
      const response = await getuserdetailsafterlogin();
      if (response.data.success == true) {
        setResponsed(response);
      }
    }
    fecthData(); //do not make calback function of useEffect  async await you can use sepraet one
  }, []);
  console.log(responsed);

  //logout api on logout button
  const logOutButton=async()=>{
    await LogOut();
    navigate("/login");
    
  }

  return (
    <>
      <div className="fixed top-0 w-[100%] bg-white">
        <div className="flex items-center py-4 justify-between w-[95%] container mx-auto">
          <div>
            <NavLink to="/">
              <h1 className="font-bold text-xl">
                HQ<span className="text-red-600">PENCILS</span>
              </h1>
            </NavLink>
          </div>
          <div>
            <ul className="flex items-center gap-10 max-lg:hidden text-sm font-semibold">
              <NavLink to="/">
                <li className="hover:text-red-600">HOME</li>
              </NavLink>
              <NavLink to="/products">
                <li className="hover:text-red-600">PRODUCTS</li>
              </NavLink>
              <NavLink to="/contact">
                <li className="hover:text-red-600">CONTACT</li>
              </NavLink>
              <p className="text-gray-500 font-normal ">
                Welcome ,{" "}
                <span className="font-bold text-red-500">
                  {responsed ? responsed.data.userfound.name : "User"}
                </span>{" "}
              </p>
              {responsed && <button class="logout-btn" onClick={logOutButton}>LOG OUT</button>}
            {!responsed && <NavLink to="/login"><button class="logout-btn" >LOG IN</button></NavLink>}
              <NavLink to="/cart">
                <li className="text-lg">
                  <div className="text-center text-sm">
                    {" "}
                    {responsed ? responsed.data.userfound.cart.length : ""}
                  </div>
                  <FiShoppingCart />
                </li>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
