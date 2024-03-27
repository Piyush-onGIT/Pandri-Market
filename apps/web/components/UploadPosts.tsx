"use client";
import React from "react";
import Image from "next/image";
import Logo from "../assets/images/Logo.png";
import useSellerStore from "../store/useStore";
import { Toaster } from "react-hot-toast";
import { fieldCheck } from "../utils/checks";
import Dropdown from "./Dropdown";

const UploadPosts = () => {
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
            Post Your Product
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
             ✏️ Description
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
              id="name"
              type="text"
              placeholder="Product Description"
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
              htmlFor="address"
            >
              <div>🥋 Image</div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
              id="address"
              type="file"
              placeholder="Product Images"
              accept="image/*"
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
              <div># Tags</div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
              id="tags"
              type="string"
              placeholder="Tag Shops or Add Product Tags"
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
              htmlFor="phoneno"
            >
              <div>📍 Title</div>
            </label>
            <input
              className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
              id="location"
              type="string"
              placeholder="Product Name"
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
              <Dropdown />
          </div>
          <div className="flex items-center justify-between mb-8">
            <button
              className="w-[100%] bg-[#e96841] hover:bg-[#f9683c] text-sm text-white font-semibold py-2 px-3 rounded focus:outline-none"
              type="submit"
            >
              Post
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default UploadPosts;
