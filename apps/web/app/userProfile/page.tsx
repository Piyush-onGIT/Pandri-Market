import React from "react";
import Dashboard from "../../components/Dashboard/dashboard";
import NavBar from "../../components/Dashboard/Navbar";
import ProfilePic from "../../assets/images/ProfilePic.jpg";
import Image from "next/image";

const page = () => {
  return (
    <>
      <div className="flex">
        <div>
          <Dashboard />
        </div>
        <div className="w-full h-full flex flex-col">
          <div>
            <NavBar />
          </div>
          <div className="h-[88vh] w-11/12 flex justify-evenly items-center rounded-3xl py-12 bg-slate-200">
            <div className="grid grid-rows-2 xl:gap-y-8 2xl:gap-y-16 h-full w-[40%] bg-white rounded-3xl overflow-hidden ">
              <div className="mb-4 h-full">
                <Image
                  className="w-full"
                  src={ProfilePic}
                  alt="profile-photo"
                />
              </div>
              <div className="px-8 text-[#333333]">
                <div className="text-xl font-bold mb-8">My Profile</div>
                <div className="mb-[3rem]">
                  <div className="mb-4 flex w-full justify-between">
                    <div>Pranjal Naman</div>
                    <div>+91 7607138454</div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 w-full h-[1px] bg-[#a3a3a3]"></div>
                  </div>
                </div>
                <div className="mb-[3rem]">
                  <div className="mb-4">pranjalofficial11@gmail.com</div>
                  <div className="relative">
                    <div className="absolute left-0 w-full h-[1px] bg-[#a3a3a3]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center mb-4">
                  <div className="flex gap-1 text-sm text-[#555555]">
                    <div className="text-[#211f1f] text-md font-semibold">
                      Credits:
                    </div>
                    <div className="text-orange-500 font-semibold">300</div>
                  </div>
                  <div className="px-4 py-1 bg-gradient-to-br from-cyan-400 to-green-600 text-white font-semibold rounded-2xl hover:cursor-pointer">
                    Buy Credits
                  </div>
                </div>
              </div>
            </div>
            <div className="h-full w-[45%] grid grid-row-6 justify-items-center items-between gap-12">
              <div className="w-full bg-white p-8 rounded-3xl row-span-4">
                <div className="mb-8">
                  <div className="flex justify-between items-center px-4 mb-4">
                    <div className="font-semibold text-lg">Address</div>
                    <div className="px-4 py-1 bg-[#a3a3a3] rounded-2xl hover:cursor-pointer">
                      Edit
                    </div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 w-full h-[1px] bg-[#a3a3a3]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4">
                  <div className="flex flex-col gap-1 text-sm text-[#555555] w-full">
                    <div className="flex items-center w-full justify-between">
                      <div className="text-[#211f1f] font-semibold m-2 py-2">
                        Permanent Address
                      </div>
                      <div className="m-2">
                        <input
                          className="border-2 outline-none rounded-md p-2"
                          type="text"
                          placeholder="Write your address..."
                        />
                      </div>
                    </div>
                    <div className="flex items-center w-full justify-between">
                      <div className="text-[#211f1f] font-semibold m-2 py-2">
                        Landmark
                      </div>
                      <div className="m-2">
                        <input
                          className="border-2 outline-none rounded-md p-2"
                          type="text"
                          placeholder="Write any landmark..."
                        />
                      </div>
                    </div>
                    <div className="flex items-center w-full justify-between">
                      <div className="text-[#211f1f] font-semibold m-2 py-2">
                        ZIP/Postal Code
                      </div>
                      <div className="m-2">
                        <input
                          className="border-2 outline-none rounded-md p-2"
                          type="number"
                          placeholder="Write the code..."
                        />
                      </div>
                    </div>
                    <div className="flex items-center w-full justify-between">
                      <div className="text-[#211f1f] font-semibold m-2 py-2">
                        City
                      </div>
                      <div className="m-2">
                        <input
                          className="border-2 outline-none rounded-md p-2"
                          type="text"
                          placeholder="city"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full bg-white px-8 pt-8 rounded-3xl">
                <div className="mb-8">
                  <div className="mb-4 px-4">
                    <div className="font-semibold text-lg">Registered numbers</div>
                  </div>
                  <div className="relative">
                    <div className="absolute left-0 w-full h-[1px] bg-[#a3a3a3]"></div>
                  </div>
                </div>
                <div className="flex justify-between items-center px-4 mb-8">
                  <div className="flex flex-col gap-1 text-sm text-[#555555]">
                    <div>Phone Number</div>
                    <div>+91 7651830854</div>
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

export default page;
