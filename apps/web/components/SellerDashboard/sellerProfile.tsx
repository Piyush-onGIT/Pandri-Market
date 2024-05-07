"use client";
import React, { useState } from "react";
import ProfilePic from "../../assets/images/ProfilePic.jpg";
import useSellerStore from "../../store/useSellerStore";
import Image from "next/image";

const SellerProfile = () => {
  const { sellerProfile } = useSellerStore();
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <div className="flex w-full m-4 md:mx-8">
        <div className="flex-col flex-auto overflow-y-auto">
          <div className="mb-4 overflow-auto lg:mb-0 h-full lg:h-[82vh] w-full gap-8 lg:gap-8 flex flex-wrap justify-evenly items-center rounded-3xl sm:mx-0 p-6 xl:py-8 bg-slate-200">
            <div className="grid xl:grid-rows-2 items-center grid-cols-1 md:grid-cols-10 xl:grid-cols-1 xl:gap-y-8 w-full 2xl:gap-y-16 xl:h-full xl:w-[40%] bg-white rounded-3xl overflow-hidden ">
              <div className="2xl:mb-4 h-full col-span-4 bg-image">
                <Image
                  className="w-full md:hidden"
                  src={ProfilePic}
                  alt="profile-photo"
                />
              </div>
              <div className="flex items-center md:col-span-6 py-2 lg:py-4 px-6 xl:px-8 h-full text-[#333333]">
                <div className="grid grid-cols-1 gap-y-4 h-full w-full">
                  <div className="text-xl font-bold">My Profile</div>
                  <div>
                    <div className="mb-4 gap-2  flex flex-wrap w-full justify-between">
                      <div>{sellerProfile.fullName}</div>
                      <div>+91 {sellerProfile.phoneNo}</div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 w-full h-[1px] bg-[#d3d3d3]"></div>
                    </div>
                  </div>
                  <div>
                    <div className="mb-4">{sellerProfile.email}</div>
                    <div className="relative">
                      <div className="absolute left-0 w-full h-[1px] bg-[#d3d3d3]"></div>
                    </div>
                  </div>
                  <div className="flex flex-wrap justify-between items-center">
                    <div className="flex gap-1 text-sm text-[#555555]">
                      <div className="text-[#211f1f] text-md font-semibold">
                        Credits:
                      </div>
                      <div className="text-orange-500 font-semibold">
                        {sellerProfile.credit}
                      </div>
                    </div>
                    <div className="px-3 lg:px-4 py-1 bg-gradient-to-br from-cyan-400 to-green-600 text-white font-semibold rounded-2xl hover:cursor-pointer">
                      Buy Credits
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="h-auto xl:h-full w-full xl:w-[45%] grid grid-cols-2 xl:grid-cols-1 xl:grid-row-6 xl:justify-items-center gap-8 xl:gap-12">
              <div className="w-full col-span-2 lg:col-span-1 bg-white p-4 xl:p-8 rounded-3xl xl:row-span-4">
                <div className="mb-6">
                  <div className="flex justify-between items-center px-4 mb-4">
                    <div className="font-semibold text-lg">Address</div>
                    <button
                      onClick={() => setToggle(!toggle)}
                      className={`px-4 py-1 ${toggle ? "hover:bg-green-400" : "hover:bg-[#bababa]"} rounded-2xl hover:cursor-pointer ${toggle ? "bg-green-500" : "bg-[#a3a3a3]"} hover:bg-[#bababa] transition-colors`}
                    >
                      {toggle ? "Save" : "Edit"}
                    </button>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 w-full h-[1px] bg-[#a3a3a3]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center xl:px-4 mb-8 xl:mb-[2rem]">
                  <div className="flex flex-col gap-1 text-sm text-[hsl(0,0%,33%)] w-full">
                    <div className="flex items-center w-full lg:justify-between ">
                      <div className="text-[#211f1f] w-full font-semibold m-2 py-2">
                        Permanent Address
                      </div>
                      <div className="m-2 w-full">
                        <input
                          className="border-2 text-xs md:text-sm outline-none rounded-md p-2 w-full"
                          type="text"
                          placeholder={`${sellerProfile.address}`}
                        />
                      </div>
                    </div>
                    <div className="flex items-center w-full justify-between">
                      <div className="text-[#211f1f] w-full font-semibold m-2 py-2">
                        Landmark
                      </div>
                      <div className="m-2 w-full">
                        <input
                          className="border-2 text-xs md:text-sm outline-none rounded-md p-2 w-full"
                          type="text"
                          placeholder="Write any landmark..."
                        />
                      </div>
                    </div>
                    <div className="flex items-center w-full justify-between">
                      <div className="text-[#211f1f] w-full font-semibold m-2 py-2">
                        ZIP/Postal Code
                      </div>
                      <div className="m-2 w-full">
                        <input
                          className="border-2 text-xs md:text-sm outline-none w-full rounded-md p-2"
                          type="number"
                          placeholder="Write the code..."
                        />
                      </div>
                    </div>
                    <div className="flex items-center w-full justify-between">
                      <div className="text-[#211f1f] w-full font-semibold m-2 py-2">
                        City
                      </div>
                      <div className="m-2 w-full">
                        <input
                          className="border-2  outline-none w-full rounded-md p-2"
                          type="text"
                          placeholder="city"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="block lg:hidden xl:block">
                  <div className="mb-4">
                    <div className="mb-2 px-4">
                      <div className="font-semibold text-lg">
                        Registered numbers
                      </div>
                    </div>
                    <div className="relative">
                      <div className="absolute left-0 w-full h-[1px] bg-[#a3a3a3]"></div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-2 mb-0">
                    <div className="flex flex-col gap-1 text-sm text-[#555555]">
                      <div>Phone Number</div>
                      <div>{`+91 ${sellerProfile.phoneNo}`}</div>
                    </div>
                    <div className="px-6 py-1 bg-gradient-to-br from-yellow-400 to-pink-600 text-white font-semibold rounded-2xl hover:cursor-pointer">
                      Verify
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white p-4 xl:px-8 xl:pt-8 rounded-3xl hidden lg:block xl:hidden">
                <div className="mb-8">
                  <div className="mb-4 px-4">
                    <div className="font-semibold text-lg">
                      Registered numbers
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 w-full h-[1px] bg-[#a3a3a3]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4 mb-8">
                  <div className="flex flex-col gap-1 text-sm text-[#555555]">
                    <div>Phone Number</div>
                    <div>+91 {sellerProfile.phoneNo}</div>
                  </div>
                  <div className="px-6 py-1 bg-gradient-to-br from-yellow-400 to-pink-600 text-white font-semibold rounded-2xl hover:cursor-pointer">
                    Verify
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SellerProfile;
