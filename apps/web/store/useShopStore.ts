import { create } from "zustand";
import api from "../utils/axios";
import toast from "react-hot-toast";
import { mountStoreDevtool } from "simple-zustand-devtools";

type UploadPostsData = {
  description: string;
  productImage: FormData | null;
  tags: string;
  title: string;
  category: string[];
  url: string;
};

type ShopRegistrationData = {
  shopName: string;
  productImage: FormData | null;
  shopAddress: string;
  shopPhoto: string;
  categorySold: string[];
  brands: string[];
  gstNo: string;
  isPhysicalShop: boolean;
};

type ShopStore = {
  uploadPostsData: UploadPostsData;
  shopRegistrationData: ShopRegistrationData;
  setShopRegistrationData: (ShopData: ShopRegistrationData) => void;
  setUploadPostsData: (PostData: UploadPostsData) => void;
  post: (body: UploadPostsData, id: string) => void;
  createShop: (body: ShopRegistrationData) => void;
};

const useShopStore = create<ShopStore>((set) => {
  let loader: string | null = null;

  return {
    uploadPostsData: {
      description: "",
      productImage: null,
      tags: "",
      title: "",
      category: [],
      url: "",
    },

    shopRegistrationData: {
      shopName: "",
      shopAddress: "",
      productImage: null,
      shopPhoto: "",
      categorySold: [],
      brands: [],
      gstNo: "",
      isPhysicalShop: false,
    },

    setShopRegistrationData: (shopData: ShopRegistrationData) =>
      set({
        shopRegistrationData: shopData,
      }),

    setUploadPostsData: (postData: UploadPostsData) =>
      set({
        uploadPostsData: postData,
      }),

    post: async (userData: UploadPostsData, id: string) => {
      loader = toast.loading("Uploading in...");
      try {
        const resImg = await api.post("/upload/single", userData.productImage);
        // console.log("img url is: ", resImg.data.imgUrl);
        userData.url = resImg.data.imgUrl;
        const res = await api.post(`/shop/posts/${id}`, userData, {
          withCredentials: true,
        });

        // setItem({ key: "token", data: res.data.token });
        toast.remove(loader);
        toast.success(res.data.message);
      } catch (error: any) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          const errorMessage = Array.isArray(error.response.data.message)
            ? error.response.data.message.join(", ")
            : error.response.data.message;
          toast.error(errorMessage);
        } else {
          toast.error("An error occurred while posting.");
        }
        if (loader) {
          toast.remove(loader);
        }
      }
    },

    createShop: async (userData: ShopRegistrationData) => {
      loader = toast.loading("Creating your shop...");
      try {
        const resImg = await api.post("/upload/single", userData.productImage);
        userData.shopPhoto = resImg.data.imgUrl;
        console.log(userData.shopPhoto);
        const res = await api.post(`/shop/shopRegistration`, userData, {
          withCredentials: true,
        });
        console.log(res.data);
        toast.remove(loader);
        toast.success(res.data.message);
      } catch (error: any) {
        if (
          error.response &&
          error.response.data &&
          error.response.data.message
        ) {
          const errorMessage = Array.isArray(error.response.data.message)
            ? error.response.data.message.join(", ")
            : error.response.data.message;
          toast.error(errorMessage);
        } else {
          toast.error("An error occurred while posting.");
        }
        if (loader) {
          toast.remove(loader);
        }
      }
    },
  };
});

export default useShopStore;

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("useShopStore", useShopStore);
}
