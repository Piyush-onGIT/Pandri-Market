"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Logo from "../assets/images/Logo.png";
import { CgProfile } from "react-icons/cg";
import { CgMenuRight } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";
import {useRouter} from "next/navigation";
import useSellerStore from "../store/useSellerStore";
import Profits from "../assets/images/online-shopping.png";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const {isAuthenticated} = useSellerStore();
  const router = useRouter();

  useEffect(() => {
    const handleOutsideClick = (e: any) => {
      // Check if the click is outside of the menu and menu is open
      if (menu && !e.target.closest(".navbar-menu")) {
        setMenu(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [menu]);

  return (
    <>
      <div className="flex justify-between items-center ml-0 mr-2 sm:mx-6 p-1.5 border-b-2 border-dashed border-[#6e6a66]">
        <div className="-translate-x-[21px] cursor-pointer">
          <Image
            className="scale-75 sm:scale-90 md:scale-100"
            src={Logo}
            alt="logo"
            width={100}
            height={100}
            onClick={() => router.push("/")}
          />
        </div>
        <div className="flex items-center gap-4 sm:gap-6 md:gap-10 font-semibold">
          {/* <div>Home</div>
          <div>About</div>
          <div>Sale</div>
          <div>Winter</div>
          <div>Blog</div> */}
          <div onClick={() => setMenu(!menu)} className="sm:hidden">
            <CgMenuRight size="1.4rem" />
          </div>
        </div>
        <div className="hidden sm:flex sm:gap-6 md:gap-10 ">
          {/* <div>
            <IoSearchSharp size="1.5rem" />
          </div> */}
          <div>
           <Image width={23} alt="plans"
            height={23} src={Profits} />  {/*<MdOutlineShoppingCart size="1.5rem" /> */}
          </div>
          <div>
          <CgProfile className="cursor-pointer" size="1.5rem" onClick={() =>  router.push("/userProfile")} />
          </div>
        </div>
        <div
          className={`absolute ${menu ? "flex" : "hidden"} right-4 top-12 z-[501] bg-white rounded-lg p-4 flex-col gap-2 sm:hidden navbar-menu`}
        >
          <div>
            <div className="flex items-center gap-2">
              <IoSearchSharp size="1.3rem" /> <div>Search</div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <MdOutlineShoppingCart size="1.3rem" /> <div>Add to Cart</div>
            </div>
          </div>
          <div>
         <div className="flex items-center gap-2">
              <CgProfile size="1.3rem" /> <div>Profile</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
