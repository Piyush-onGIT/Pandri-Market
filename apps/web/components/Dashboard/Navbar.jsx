import React from "react";
import Image from "next/image";
import UserProfile from "../../assets/images/UserProfile.png";
import { MdArrowDropDown } from "react-icons/md";

const Navbar = () => {
  return (
    <>
      <div className="py-4 px-6 flex justify-between">
        <div>
          <div className="text-xl font-semibold text-[#333333]">
            My Dashboard
          </div>
          <div className="text-xs text-[#a3a3a3]">Welcome to Pandri Market</div>
        </div>
        <div className="flex gap-4 items-center">
          <div>
            <Image
              className="rounded-full"
              src={UserProfile}
              alt="profile-pic"
              width={40}
              height={40}
            />
          </div>
          <div className="flex gap-1 items-center">
            <div className="font-semibold">Hello Sam!</div>
            <div>
              <MdArrowDropDown />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
