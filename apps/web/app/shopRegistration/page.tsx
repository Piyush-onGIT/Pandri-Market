'use client'
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../assets/images/Logo.png";
import Avatar from "../../assets/images/AvatarShop.jpg";
// import Avatar from "../../assets/images/AvatarShop2.jpg";
// import Avatar from "../../assets/images/ShopRegImg.jpg";
import { Toaster } from "react-hot-toast";
import useShopStore from "../../store/useShopStore";
import Multiselect from "../../components/ShopRegistration/Multiselect";
//Checks to be added

const registerShop = () => {
  const { createShop, shopRegistrationData, setShopRegistrationData } = useShopStore();
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const handleMultiselectSubmit = (selectedItems: string[], type: string) => {
    if (type === "categories") {
      setSelectedCategories(selectedItems);
      setShopRegistrationData({
        ...shopRegistrationData,
        categorySold: selectedItems, // Update categorySold array in shopRegistrationData
      });
    } else if (type === "brands") {
      setSelectedBrands(selectedItems);
      setShopRegistrationData({
        ...shopRegistrationData,
        brands: selectedItems, // Update brands array in shopRegistrationData
      });
    }
  }; // <- Add this closing brace

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(shopRegistrationData);

    console.log("Selected Categories:", selectedCategories);
    console.log("Selected Brands:", selectedBrands);

    createShop(shopRegistrationData);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("productImage", file);
      setShopRegistrationData({
        ...shopRegistrationData,
        productImage: formData,
      });
      console.log(formData);
    }
  };

  return (
    <>
      <Toaster />

      <div className="bg-white h-screen">
        <div className="lg:grid lg:h-screen lg:grid-cols-12">
          <section className="relative flex items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6 h-screen overflow-y-hidden">
            <Image
              src={Avatar}
              alt=""
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 opacity-80"
            />
            <div className="hidden lg:relative lg:block lg:p-12">
              <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                Welcome to PM
              </h2>
              <p className="mt-4 leading-relaxed text-white/90">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eligendi nam dolorum aliquam, quibusdam aperiam voluptatum.
              </p>
            </div>
          </section>
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6 overflow-y-scroll h-full">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="mb-4 flex justify-center">
                <Image src={Logo} alt="logo" width={100} />
              </div>
              <div className="text-center mb-4 text-lg font-bold text-[#333333]">
                Create Your Shop
              </div>
              <form
                action="#"
                className="mt-8 grid grid-cols-6 gap-6"
              >
                <div className="mb-4 col-span-6 sm:col-span-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    ✏️ Name
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
                    id="name"
                    type="text"
                    placeholder="Shop name"
                    value={shopRegistrationData.shopName}
                    onChange={(e) =>
                      setShopRegistrationData({
                        ...shopRegistrationData,
                        shopName: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-4 col-span-6 sm:col-span-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="tags"
                  >
                    <div>📍Address</div>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
                    id="tags"
                    type="string"
                    placeholder="Write shop address"
                    value={shopRegistrationData.shopAddress}
                    onChange={(e) =>
                      setShopRegistrationData({
                        ...shopRegistrationData,
                        shopAddress: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4 col-span-6 ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="location"
                  >
                    <div>🏪 Shop Image</div>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
                    id="address"
                    type="file"
                    placeholder="Shop Image"
                    accept="image/*"
                    // value={`${uploadPostsData.image}`}
                    onChange={handleFileChange}
                  />
                </div>

                <div className="mb-4 col-span-6 sm:col-span-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="title"
                  >
                    <div> GST Number</div>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
                    id="location"
                    type="string"
                    placeholder="Enter GST number"
                    value={shopRegistrationData.gstNo}
                    onChange={(e) =>
                      setShopRegistrationData({
                        ...shopRegistrationData,
                        gstNo: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <div className="font-semibold text-sm text-[#333333]">
                    👕 Categories
                  </div>
                  <Multiselect onSelect={(selectedItems) => handleMultiselectSubmit(selectedItems, 'categories')} />
                </div>

                <div className="col-span-6 sm:col-span-3 w-full">
                  <div className="font-semibold text-sm text-[#333333]">
                    👖Brands
                  </div>
                  <Multiselect onSelect={(selectedItems) => handleMultiselectSubmit(selectedItems, 'brands')} />
                </div>

                <div className="mb-4 col-span-6 sm:col-span-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="tags"
                  >
                    <div>📍Physical Shop</div>
                  </label>
                  <div className="h-full">
                    <div className="flex gap-1 w-full">
                      <input
                        type="checkbox"
                        id="yes"
                        onChange={() =>
                          setShopRegistrationData({
                            ...shopRegistrationData,
                            isPhysicalShop: !shopRegistrationData.isPhysicalShop,
                          })
                        }
                        name="yes"
                      />
                      <label htmlFor="yes">Yes</label>
                    </div>
                  </div>
                </div>

                {/* Create Account Button */}
                <div className="flex items-center justify-between mb-8 col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="w-[100%] bg-[#e96841] hover:bg-[#f9683c] text-sm text-white font-semibold py-2 px-3 rounded focus:outline-none"
                    // type="submit"
                    onClick={handleSubmit}
                  >
                    Post
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};

export default registerShop;
