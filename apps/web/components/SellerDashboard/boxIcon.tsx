"use client";
import React from "react";

const style1 =
  "w-[35px] h-[35px] bg-transparent rounded-md flex justify-center items-center transition-all hover:cursor-pointer";
const style2 =
  "w-[35px] h-[35px] bg-gradient-to-br from-yellow-400 to-pink-600 rounded-md flex justify-center items-center hover:cursor-pointer";

const boxIcon = ({
  icon,
  isClicked = false,
}: {
  icon: React.ReactNode;
  isClicked?: boolean;
}) => {
  return <div className={isClicked == true ? style2 : style1}>{icon}</div>;
};

export default boxIcon;
