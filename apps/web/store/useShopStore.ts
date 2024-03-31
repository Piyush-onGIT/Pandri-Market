import { create } from "zustand";
import api from "../utils/axios";
import toast from "react-hot-toast";

type UploadPostsData = {
  description: string;
  productImage: FormData | null;
  tags: string;
  title: string;
  category: string[];
  url: string;
};

type ShopStore = {
  uploadPostsData: UploadPostsData;
  setUploadPostsData: (SellerData: UploadPostsData) => void;
  post: (body: UploadPostsData, id: string) => void;
};

const useShopStore = create<ShopStore>((set) => {
  let loader: string | null = null; // Declare loader variable outside

  return {
    uploadPostsData: {
      description: "",
      productImage: null,
      tags: "",
      title: "",
      category: [],
      url: "",
    },

    setUploadPostsData: (sellerData: UploadPostsData) =>
      set({
        uploadPostsData: sellerData,
      }),

    post: async (userData: UploadPostsData, id: string) => {
      loader = toast.loading("Uploading in...");
      try {
    
        const resImg = await api.post("/upload/single", userData.productImage);
        console.log("img url is: ", resImg.data.imgUrl);
        userData.url = resImg.data.imgUrl;
        const res = await api.post(`/shop/posts/${id}`, userData, {
          withCredentials: true,
        });
        console.log(id);

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
  };
});

export default useShopStore;
