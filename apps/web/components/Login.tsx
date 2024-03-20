"use client";
import React from "react";
import Image from "next/image";
import Logo from "../assets/images/Logo.png";
import Link from "next/link";
import useStore from "../store/useStore";

const Login = () => {
  const phoneNo = useStore((state: any) => state.phoneNo);
  const password = useStore((state: any) => state.password);
  const setPhoneNo = useStore((state: any) => state.setPhoneNo);
  const setPassword = useStore((state: any) => state.setPassword);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    console.log("Phone No:", phoneNo);
    console.log("Password:", password);
  };

  return (
    <div className="w-[20rem] sm:w-[26rem] mx-auto">
      <form
        className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4"
        onSubmit={handleSubmit}
      >
        <div className="mb-4 flex justify-center">
          <Image src={Logo} alt="logo" width={100} />
        </div>
        <div className="text-center mb-4 text-lg italic text-[#333333]">
          Login to Dashboard
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phoneNo"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
            id="phoneNo"
            type="number"
            placeholder="Enter your number"
            value={(phoneNo === 0) ? "" : phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            <div className="flex justify-between items-center">
              <div>Password</div>
              <div className="font-normal text-[#f9683c] text-[0.8rem] hover:underline">
                Forget Password?
              </div>
            </div>
          </label>
          <input
            className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="flex items-center justify-between mb-8">
          <button
            className="w-[100%] bg-[#e96841] hover:bg-[#f9683c] text-sm text-white font-semibold py-2 px-3 rounded focus:outline-none"
            type="submit"
          >
            Log In
          </button>
        </div>

        <div className="flex justify-between items-center mb-4">
          <div className="w-[44%] h-[1px] bg-[#333333]"></div>
          <div>Or</div>
          <div className="w-[44%] h-[1px] bg-[#333333]"></div>
        </div>

        <div>
          <div>
            Don't have an Account?{" "}
            <Link
              href="/Signup"
              className="text-[#f9683c] font-semibold underline hover:no-underline"
            >
              Register as Shop Owner
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
