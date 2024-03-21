import create from "zustand";

type Store = {
  name: string;
  email: string;
  address: string;
  phoneNo: number;
  password: string;
};

const useUserStore = create<Store>((set) => ({
  name: "",
  phoneNo: 0,
  email: "",
  password: "",
  address: "",
  setPhoneNo: (newPhoneNo: number) => {
    set({ phoneNo: newPhoneNo });
  },
  setName: (newName: string) => {
    set({ name: newName });
  },
  setEmail: (newEmail: string) => {
    set({ email: newEmail });
  },
  setAddress: (newAddress: string) => {
    set({ address: newAddress });
  },
  setPassword: (newPassword: string) => {
    set({ password: newPassword });
  },
}));

export default useUserStore;

