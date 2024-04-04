"use client";
import React from 'react';
import Image from 'next/image';
import Logo from '../assets/images/Logo.png';
import Avatar from '../assets/images/avatar.jpg';
import { Toaster } from 'react-hot-toast';
import Dropdown from './Dropdown';
import useShopStore from '../store/useShopStore';
//Checks to be added

const UploadPosts = ({ params }: any) => {
  const { post, uploadPostsData, setUploadPostsData } = useShopStore();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log(uploadPostsData);

    post(uploadPostsData, params.id);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files && e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("productImage", file);
      setUploadPostsData({
        ...uploadPostsData,
        productImage: formData,
      });
      console.log(formData);
    }
  };

  return (
    <>
      <Toaster />
      <div className="bg-white">
        <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
          <section className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
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
          <main className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <div className="mb-4 flex justify-center">
                <Image src={Logo} alt="logo" width={100} />
              </div>
              <div className="text-center mb-4 text-lg font-bold text-[#333333]">
                Post Your Product
              </div>
              <form
                action="#"
                className="mt-8 grid grid-cols-6 gap-6"
                onSubmit={handleSubmit}
              >
                <div className="mb-4 col-span-6 sm:col-span-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="description"
                  >
                    ✏️ Description
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
                    id="name"
                    type="text"
                    placeholder="Product Description"
                    value={uploadPostsData.description}
                    onChange={(e) =>
                      setUploadPostsData({
                        ...uploadPostsData,
                        description: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="mb-4 col-span-6 sm:col-span-3">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="tags"
                  >
                    <div># Tags</div>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
                    id="tags"
                    type="string"
                    placeholder="Tag Shops or Add Product Tags"
                    value={uploadPostsData.tags}
                    onChange={(e) =>
                      setUploadPostsData({
                        ...uploadPostsData,
                        tags: e.target.value,
                      })
                    }
                  />
                </div>
                <div className="mb-4 col-span-6 ">
                  <label
                    className="block text-gray-700 text-sm font-bold mb-2"
                    htmlFor="location"
                  >
                    <div>🥋 Image</div>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
                    id="address"
                    type="file"
                    placeholder="Product Images"
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
                    <div>📍 Title</div>
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:outline-[#f9683c]"
                    id="location"
                    type="string"
                    placeholder="Product Name"
                    value={uploadPostsData.title}
                    onChange={(e) =>
                      setUploadPostsData({
                        ...uploadPostsData,
                        title: e.target.value,
                      })
                    }
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <Dropdown />
                </div>

                {/* Create Account Button */}
                <div className="flex items-center justify-between mb-8 col-span-6 sm:flex sm:items-center sm:gap-4">
                  <button
                    className="w-[100%] bg-[#e96841] hover:bg-[#f9683c] text-sm text-white font-semibold py-2 px-3 rounded focus:outline-none"
                    type="submit"
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

export default UploadPosts;
