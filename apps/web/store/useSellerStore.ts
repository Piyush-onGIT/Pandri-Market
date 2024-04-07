import { create } from "zustand";
import api from "../utils/axios";
import toast from "react-hot-toast";
import { mountStoreDevtool } from "simple-zustand-devtools";

type LoginSellerData = {
  phoneNo: string;
  password: string;
};

type SellerData = {
  fullName: string;
  phoneNo: string;
  address: string;
  email: string;
  credit: string;
};

type SignupSellerData = {
  fullName: string;
  phoneNo: string;
  email: string;
  address: string;
  password: string;
};

type AuthStore = {
  sellerProfile: SellerData;
  signupSellerData: SignupSellerData;
  loginSellerData: LoginSellerData;
  setLoginSellerData: (SellerLoginInfo: LoginSellerData) => void;
  setSignupSellerData: (SellerSignupInfo: SignupSellerData) => void;
  setSellerProfileData: (SellerProfileInfo: SellerData) => void;
  signup: (body: SignupSellerData) => void;
  login: (body: LoginSellerData) => void;
  profile: (body: SellerData) => void;
};

const useSellerStore = create<AuthStore>((set: any) => {
  let loader: string | null = null; // Declare loader variable outside

  return {
    sellerProfile: {
      fullName: "",
      phoneNo: "",
      email: "",
      address: "",
      credit: "",
    },

    signupSellerData: {
      fullName: "",
      phoneNo: "",
      email: "",
      address: "",
      password: "",
    },

    loginSellerData: {
      phoneNo: "",
      password: "",
    },

    setLoginSellerData: (sellerData: LoginSellerData) =>
      set({
        loginSellerData: sellerData,
      }),

    setSignupSellerData: (sellerData: SignupSellerData) =>
      set({
        signupSellerData: sellerData,
      }),

    setSellerProfileData: (SellerInfo: SellerData) =>
      set({
        sellerProfile: SellerInfo,
      }),

    login: async (userData: LoginSellerData) => {
      const loader = toast.loading("Logging in...");
      try {
        const res = await api.post("/auth/seller/login", userData, {
          withCredentials: true,
        });
        // setItem({ key: "token", data: res.data.token });
        toast.remove(loader);
        toast.success(res.data.message);
      } catch (error: any) {
        // Error handling
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
          toast.error("An error occurred during login.");
        }
        if (loader) {
          toast.remove(loader);
        }
      }
    },

    signup: async (userData: SignupSellerData) => {
      const loader = toast.loading("Signing up...");
      try {
        const res = await api.post("/auth/seller/signup", userData, {
          withCredentials: true,
        });
        // setItem({ key: "token", data: res.data.token });
        toast.success(res.data.message);
        // console.log(res);
        // console.log(res["data"]);
        // console.log(res.data.message);

        toast.remove(loader);
      } catch (error: any) {
        // Error handling
        console.log(error);
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
          toast.error("An error occurred during signup.");
        }
        if (loader) {
          toast.remove(loader);
        }
      }
    },

    profile: async () => {
      try {
        const res = await api.get("/auth/seller/myProfile");

        console.log(res.data.information);
        set({
          sellerProfile: res.data.information,
        });
      } catch (error: any) {}
    },
  };
});

export default useSellerStore;

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("useSellerStore", useSellerStore);
}
