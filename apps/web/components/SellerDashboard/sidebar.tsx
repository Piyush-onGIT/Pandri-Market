"use client";
import React, { useState } from "react";
import BoxIcon from "./boxIcon";
import Image from "next/image";
import Logo from "../../assets/images/Logo.png";
import { LuLayoutDashboard } from "react-icons/lu";
import { GiClothes } from "react-icons/gi";
import { CiShop } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";
import SellerProfile from "./sellerProfile";
import Table from "../../components/Table/table";

const SideBar = ({
  setChild,
}: {
  setChild: React.Dispatch<React.SetStateAction<React.ReactNode>> | any;
}) => {
  const [btn, setBtn] = useState([
    {
      icon: <LuLayoutDashboard color="gray" size={20} />,
      isClicked: false,
      name: "My Dashboard",
      link: "/",
      component: (
        <div className="w-11/12 h-full flex justify-center items-center bg-[#d3d3d3] self-center">
          <Table />
        </div>
      ),
    },
    {
      icon: <CgProfile color="gray" size={20} />,
      isClicked: false,
      name: "Profile",
      link: "/",
      component: <SellerProfile />,
    },
    {
      icon: <CiShop color="gray" size={20} />,
      isClicked: false,
      name: "Shops",
      link: "/shop/registration",
      component: (
        <div className="w-11/12 h-full flex justify-center items-center bg-[#d3d3d3] self-center">
          Hi3
        </div>
      ),
    },
    {
      icon: <GiClothes color="gray" size={20} />,
      isClicked: false,
      name: "Products",
      link: "/uploadPosts",
      component: (
        <div className="w-11/12 h-full flex justify-center items-center bg-[#d3d3d3] self-center">
          Hi4
        </div>
      ),
    },
  ]);

  // const handleButtonClick = (index: any) => {
  //   const updatedBtn = btn.map((item, i) => {
  //     if (i === index) {
  //       return {
  //         ...item,
  //         isClicked: true,
  //         icon: React.cloneElement(item.icon, { color: "white" }), // Change icon color to white
  //       };
  //     } else {
  //       return {
  //         ...item,
  //         isClicked: false,
  //         icon: React.cloneElement(item.icon, { color: "gray" }), // Reset other icons to gray
  //       };
  //     }
  //   });
  //   setBtn(updatedBtn);
  // };

  return (
    <>
      <div className="w-[16rem] h-screen bg-white hidden sm:block">
        <div className="self-center mb-4 w-full flex justify-center items-center py-2">
          <Image src={Logo} alt="logo" width={100} height={100} />
        </div>
        <div className="flex flex-col items-left gap-4 px-6">
          <div className="text-[#a3a3a3] text-sm font-semibold">MAIN</div>
          {btn.map((val, key) => (
            <div
              className="flex gap-2 items-center justify-left rounded-md text-[#333333] text-sm hover:bg-slate-200"
              key={key}
              onClick={() => {
                if (val.name === "Shops") {
                  window.open(val.link, "_blank");
                } else setChild(val.component);
                // handleButtonClick(key);
                // router.push(val.link);
              }}
            >
              <BoxIcon icon={val.icon} isClicked={val.isClicked} />
              <div
                className={`hover:cursor-pointer ${
                  val.isClicked == true
                    ? "bg-gradient-to-b from-yellow-400 to-pink-600 text-transparent bg-clip-text font-semibold md:block"
                    : ""
                }`}
              >
                {val.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
