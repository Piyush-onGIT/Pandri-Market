'use client'
import React, { useEffect } from "react";
import Dashboard from "../../components/Dashboard/dashboard";
import NavBar from "../../components/Dashboard/Navbar";
import Table from "../../components/Table/table";
import useSellerStore from "../../store/useSellerStore";
import { Chip } from "@nextui-org/react";

const UserDashboard = () => {
  const { profile, sellerProfile } = useSellerStore();
  useEffect(() => {
    profile();
    console.log(sellerProfile);
  }, []);

  return (
    <>
      <div className="flex">
        <div className="flex-none shadow-lg">
          <Dashboard />
        </div>
        <div className="w-full flex flex-col bg-[#d3d3d3]">
          <div className="shadow-sm bg-white">
            <NavBar />
          </div>
          <div className="w-11/12 h-full flex justify-center items-center bg-[#d3d3d3] self-center">
            <Table />
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDashboard;
