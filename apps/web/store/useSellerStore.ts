import { create } from "zustand";
import api from "../utils/axios";
import toast from "react-hot-toast";
import { mountStoreDevtool } from "simple-zustand-devtools";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

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
  shops: any[];
};

type SignupSellerData = {
  fullName: string;
  phoneNo: string;
  email: string;
  address: string;
  password: string;
};

type AuthStore = {
  isLoading: boolean;
  isAuthenticated: boolean;
  sellerProfile: SellerData;
  signupSellerData: SignupSellerData;
  loginSellerData: LoginSellerData;
  setLoginSellerData: (SellerLoginInfo: LoginSellerData) => void;
  setSignupSellerData: (SellerSignupInfo: SignupSellerData) => void;
  setSellerProfileData: (SellerProfileInfo: SellerData) => void;
  signup: (body: SignupSellerData) => void;
  login: (body: LoginSellerData, router: AppRouterInstance) => void;
  profile: () => void;
  getMyShops: () => void;
};

const useSellerStore = create<AuthStore>((set) => {
  let loader: string | null = null; // Declare loader variable outside

  return {
    sellerProfile: {
      fullName: "",
      phoneNo: "",
      email: "",
      address: "",
      credit: "",
      shops: [],
    },

    isAuthenticated: false,
    isLoading: true,

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

    login: async (userData: LoginSellerData, router) => {
      const loader = toast.loading("Logging in...");
      try {
        const res = await api.post("/auth/seller/login", userData, {
          withCredentials: true,
        });
        // setItem({ key: "token", data: res.data.token });
        set({ isAuthenticated: true });
        router.push("/dashboard");
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
        set({
          sellerProfile: res.data.information,
          isAuthenticated: true,
          isLoading: false,
        });
      } catch (error: any) {
        set({ isLoading: false, isAuthenticated: false });
      }
    },

    getMyShops: async () => {
      try {
        const res = await api.get("/shop/getMyShops");
        const tmpSellerProfile = useSellerStore.getState().sellerProfile;
        tmpSellerProfile.shops = res.data.shops;
        set({ sellerProfile: tmpSellerProfile });
      } catch (error: any) {
        set({ isLoading: false });
      }
    },
  };
});

export default useSellerStore;

if (process.env.NODE_ENV === "development") {
  mountStoreDevtool("useSellerStore", useSellerStore);
}
