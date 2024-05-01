"use client";
import React, { useState } from "react";
import Sidebar from "../../components/SellerDashboard/sidebar";
import NavBar from "../../components/SellerDashboard/Navbar";
import Table from "../../components/Table/table";

const UserDashboard = () => {
  const [child, setChild] = useState<React.ReactNode>(
    <div className="w-11/12 h-full flex justify-center items-center bg-[#d3d3d3] self-center">
      <Table />
    </div>
  );

  return (
    <>
      <div className="flex">
        <div className="flex-none shadow-lg">
          <Sidebar setChild={setChild} />
        </div>
        <div className="w-full flex flex-col bg-[#d3d3d3]">
          <div className="shadow-sm bg-white">
            <NavBar />
          </div>
          {child}
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
