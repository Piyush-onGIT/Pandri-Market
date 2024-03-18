import React from "react";
import NavBar from "../../components/NavBar";
import Image from "next/image";
import SampleI1 from "../../assets/images/pexels-andrea-piacquadio-837140.jpg";
import SampleI2 from "../../assets/images/pexels-juan-mendez-1536619.jpg";
import SampleI3 from "../../assets/images/Hero1.png";
import Customer from "../../assets/images/customer.jpg";
import Arrow from "../../assets/images/arrow.png";
import { CiFacebook } from "react-icons/ci";
import { IoLogoInstagram } from "react-icons/io5";
import { CiTwitter } from "react-icons/ci";
import "../../globals.css";

const HomePage = () => {
  return (
    <div className="bg-[#e0d9d0] text-[#333333] h-[100%] lg:h-[100vh]">
      <div>
        <NavBar />
      </div>
      <div className="flex items-center gap-4 absolute font-semibold rotate-90 -right-20 md:-right-16 top-[50%] -translate-y-[50%]">
        <div className="w-[2rem] h-[1px] bg-black inline-block"></div>
        <div className="text-[0.8rem] lg:text-normal">Follow on</div>
        <div className="scale-125 lg:scale-150">
          <CiFacebook />
        </div>
        <div>
          <IoLogoInstagram className="scale-125 lg:scale-150" />
        </div>
        <div>
          <CiTwitter className="scale-125 lg:scale-150" />
        </div>
      </div>
      <div className="mx-3 xs:mx-8">
        <div className="relative mb-4 sm:mb-6">
          <div className="block sm:grid grid-cols-3 grid-rows-2 lg:flex justify-around items-center mt-6 sm:mt-10 text-[2rem] sm:text-[2.8rem] md:text-5xl lg:text-6xl xl:text-7xl leading-normal font-bold text-center font-custom">
            <div className="hidden sm:block rounded-2xl overflow-hidden scale-75 lg:scale-100">
              <Image src={SampleI1} alt="sample-1" width={200} />
            </div>
            <div className="text-center sm:text-left md:text-center row-start-1 col-start-1 col-span-2 row-span-2">
              <div className="md:mb-3 xl:mb-4">Elevate Your Shop</div>
              <div className="md:leading-[4.8rem]">Elevate Your Business</div>
            </div>
            <div className="hidden sm:block col-start-3 rounded-2xl overflow-hidden scale-75 lg:scale-100">
              <Image src={SampleI2} alt="sample-2" width={200} />
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center">
          <div className="grid grid-cols-2 gap-y-8 justify-items-center sm:flex sm:mt-10 lg:mt-16 sm:justify-around w-[100vw]">
            <div className="self-center col-span-2 grid grid-cols-6 sm:flex flex-col gap-6 md:gap-12 relative">
              <div className="col-span-6 sm:col-span-4 flex flex-col gap-6 md:gap-8">
                <div className="flex flex-col gap-2 absolute -right-2 -top-12">
                  <div className="text-[0.8rem] font-semibold">Up To</div>
                  <div className="text-[#f9683c] text-2xl font-semibold">
                    35%
                  </div>
                  <div className="text-2xl font-semibold">OFF</div>
                  <div className="absolute -left-[50%] -translate-x-[25%] -bottom-20">
                    <Image className="" src={Arrow} alt="arrow" width={200} />
                  </div>
                </div>
                <div className=" flex flex-col gap-5 font-black">
                  <div>Men</div>
                  <div className="text-[#f9683c]">Women</div>
                  <div>Kids</div>
                  <div className="text-[0.8rem] font-semibold">See More</div>
                  <button className="bg-[#f9683c] p-3 text-white rounded-lg w-[40%] sm:w-[55%]">
                    Shop Now &rarr;
                  </button>
                </div>
                <div className="flex gap-4 items-center font-bold">
                  <div className="w-[2.5rem] h-[8px] bg-[#f9683c] inline-block"></div>
                  <div className="inline-block">80+ Sales</div>
                  <div className="w-[1.5rem] h-[8px] bg-[#f9683c] inline-block"></div>
                  <div className="inline-block">50+ Brands</div>
                </div>
                <div className="font-semibold text-2xl tracking-wide">
                  <div>Make Your Collection</div>
                  <div>Beautiful</div>
                </div>
              </div>
              <div className="lg:hidden self-center w-[100vw] xs:w-[100%] col-span-6 xs:col-span-3 sm:col-span-2">
                <div>
                  <div className="flex gap-1 items-center mt-4">
                    <div>
                      <Image
                        className="rounded-full"
                        src={Customer}
                        alt="customer"
                        width={35}
                      />
                    </div>
                    <div>
                      <Image
                        className="rounded-full"
                        src={Customer}
                        alt="customer"
                        width={35}
                      />
                    </div>
                    <div>
                      <Image
                        className="rounded-full"
                        src={Customer}
                        alt="customer"
                        width={35}
                      />
                    </div>
                    <div className="text-[1rem] font-semibold">10+ More</div>
                  </div>
                  <div className="w-[100%] h-[2px] bg-[#333333] mt-10"></div>
                </div>
              </div>
            </div>
            <div className="w-[320px] row-start-1 col-span-2">
              <Image src={SampleI3} alt="sample-3" />
            </div>
            <div className="self-center hidden lg:block">
              <div className="text-xl font-semibold mb-3 tracking-wider">
                PARTICIPANTS
              </div>
              <div className="flex gap-1 items-center mt-4">
                <div>
                  <Image
                    className="rounded-full"
                    src={Customer}
                    alt="customer"
                    width={35}
                  />
                </div>
                <div>
                  <Image
                    className="rounded-full"
                    src={Customer}
                    alt="customer"
                    width={35}
                  />
                </div>
                <div>
                  <Image
                    className="rounded-full"
                    src={Customer}
                    alt="customer"
                    width={35}
                  />
                </div>
                <div className="text-[1rem] font-semibold">10+ More</div>
              </div>
              <div className="w-[100%] h-[1px] bg-[#333333] mt-10"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
