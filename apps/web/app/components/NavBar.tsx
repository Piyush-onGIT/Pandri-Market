import React from "react";
import Image from "next/image";
import Logo from "../assets/images/Logo.png";
import { CgProfile } from "react-icons/cg";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoSearchSharp } from "react-icons/io5";

const NavBar = () => {
  return (
    <>
      <div className="flex justify-between items-center ml-0 mr-2 sm:mx-6 p-2 border-b-2 border-dashed border-[#6e6a66]">
        <div>
          <Image className="scale-75 sm:scale-90 md:scale-100" src={Logo} alt="logo" width={100} height={100} />
        </div>
        <div className="flex gap-4 sm:gap-6 md:gap-10 font-semibold">
          <div>Home</div>
          <div>About</div>
          <div>Sale</div>
          <div>Winter</div>
          <div>Blog</div>
        </div>
        <div className="hidden sm:flex sm:gap-6 md:gap-10 ">
          <div>
            <IoSearchSharp size="1.5rem" />
          </div>
          <div>
            <MdOutlineShoppingCart size="1.5rem" />
          </div>
          <div>
            <CgProfile size="1.5rem" />
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
