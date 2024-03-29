"use client";
import React from "react";
import Image from "next/image";
import Logo from "../assets/images/Logo.png";
import Link from "next/link";
import {useSellerStore} from "../store/useStore";
import { Toaster } from "react-hot-toast";
import { fieldCheck } from "../utils/checks";

const Signup = () => {
  const {signup, signupSellerData, setSignupSellerData } = useSellerStore();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(signupSellerData);
    const checkPass = fieldCheck(signupSellerData);
    if (checkPass) signup(signupSellerData);
  };

  return (
    <>
      <Toaster />
      <div className="w-[20rem] sm:w-[26rem] mx-auto scale-90">
        <form
          className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
          onSubmit={handleSubmit}
        >
          <div className="mb-4 flex justify-center">
            <Image src={Logo} alt="logo" width={100} />
          </div>
          <div className="text-center mb-4 text-lg italic text-[#333333]">
            Register new account
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
              id="name"
              type="text"
              placeholder="John Doe"
              value={signupSellerData.name}
              onChange={(e) =>
                setSignupSellerData({
                  ...signupSellerData,
                  name: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              <div>Email</div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
              id="email"
              type="email"
              placeholder="Email"
              value={signupSellerData.email}
              onChange={(e) =>
                setSignupSellerData({
                  ...signupSellerData,
                  email: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="address"
            >
              <div>Address</div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
              id="address"
              type="address"
              placeholder="Write your address"
              value={signupSellerData.address}
              onChange={(e) =>
                setSignupSellerData({
                  ...signupSellerData,
                  address: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="phoneno"
            >
              <div>Phone Number</div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
              id="phoneNo"
              type="number"
              placeholder="Enter your number"
              value={signupSellerData.phoneNo}
              onChange={(e) =>
                setSignupSellerData({
                  ...signupSellerData,
                  phoneNo: e.target.value,
                })
              }
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              <div>Set Password</div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
              id="password"
              type="password"
              placeholder="Password"
              value={signupSellerData.password}
              onChange={(e) =>
                setSignupSellerData({
                  ...signupSellerData,
                  password: e.target.value,
                })
              }
            />
          </div>
          <div className="flex items-center justify-between mb-8">
            <button
              className="w-[100%] bg-[#e96841] hover:bg-[#f9683c] text-sm text-white font-semibold py-2 px-3 rounded focus:outline-none"
              type="submit"
            >
              Register
            </button>
          </div>

          <div className="flex justify-between items-center mb-4">
            <div className="w-[44%] h-[1px] bg-[#333333]"></div>
            <div>Or</div>
            <div className="w-[44%] h-[1px] bg-[#333333]"></div>
          </div>

          <div>
            <div>
              Already have an account?{" "}
              <Link
                href="/login"
                className="text-[#f9683c] font-semibold underline hover:no-underline"
              >
                Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;
