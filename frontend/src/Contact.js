import React, { useState } from "react";
import { BsInstagram, BsYoutube, BsTelegram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { contactUS } from "./services/apis";
import { useSelector } from "react-redux";

const Contact = () => {

   
  const [inputData, setInputData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const inputFunction = (event) => {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  };
  console.log(inputData);

  const submitButton = async (event) => {
    event.preventDefault();
    const { name, email, mobile, message } = inputData;

    if (!name || !email || !mobile || !message) {
      alert("please Fill All Data Properly");
    }

    try {
      const conatctAPIResponse = await contactUS(inputData);
      if (conatctAPIResponse.status == 200) {
        alert("message store successfuly ! Thanks for contacting");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="w-[100%] bg-gradient-to-r mt-12 from-purple-50 py-10">
        <section className="flex w-[95%] border-[1px] py-20 border-gray-300 container mx-auto">
          <div className="flex flex-col lg:flex-row w-[85%] container mx-auto justify-around gap-20">
            <div className="lg:w-2/3">
              <form className="inline-grid gap-4 w-[100%]">
                <p>LEAVE A MESSAGE</p>
                <input
                  onChange={inputFunction}
                  name="name"
                  className="border-[1px] py-2 px-4 rounded-sm border-gray-300"
                  required
                  autoComplete="off"
                  placeholder="Your Name"
                  type="text"
                />
                <input
                  onChange={inputFunction}
                  name="email"
                  className="border-[1px] py-2 px-4 rounded-sm border-gray-300"
                  required
                  autoComplete="off"
                  placeholder="E-mail"
                  type="email"
                />
                <input
                  onChange={inputFunction}
                  name="mobile"
                  className="border-[1px] py-2 px-4 rounded-sm border-gray-300"
                  required
                  autoComplete="off"
                  placeholder="Enter Mobile Number"
                  type="text"
                />
                <textarea
                  onChange={inputFunction}
                  name="message"
                  className="border-[1px] py-2 px-4 rounded-sm border-gray-300"
                  required
                  autoComplete="off"
                  placeholder="Your Message"
                  id=""
                  cols="30"
                  rows="10"
                />
                <input
                  onClick={submitButton}
                  type="submit"
                  value="Submit"
                  className="bg-[#009DAE] w-[150px] p-2 text-white font-semibold cursor-pointer"
                />
              </form>
            </div>

            <div className="flex flex-col lg:w-1/3 gap-6">
              <div>
                <h1 className="py-3 text-lg font-semibold">Contact</h1>
                <div className="flex gap-2">
                  <span className="font-semibold">Email :</span>
                  <a
                    className="text-gray-700"
                    href="mailto:kaushikvaibhav017@gmail.com"
                  >
                    demo@gmail.com
                  </a>
                </div>
                <div className="flex gap-2">
                  <span className="font-semibold">Hours :</span>
                  <p className="text-gray-700">10:00 - 18:00, Mon - Sat</p>
                </div>
              </div>

              <div>
                <h1 className="py-3 text-lg font-semibold">Follow us</h1>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/vaibhav.kaushik.017?igshid=ZDdkNTZiNTM="
                    target="_blank"
                  >
                    <BsInstagram
                      className="text-gray-700 hover:text-pink-600"
                      name="logo-instagram"
                    />
                  </a>
                  <a href="mailto:kaushikvaibhav017@gmail.com" target="_blank">
                    <SiGmail
                      className="text-gray-700 hover:text-blue-600"
                      name="mail-outline"
                    />
                  </a>
                  <a href="https://www.youtube.com/@subspro" target="_blank">
                    <BsYoutube
                      className="text-gray-700 hover:text-red-600"
                      name="logo-youtube"
                    />
                  </a>
                  <a
                    href="https://telegram.dog/SubsPRO_Official"
                    target="_blank"
                  >
                    <BsTelegram
                      className="text-gray-700 hover:text-blue-600"
                      name="paper-plane-outline"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
