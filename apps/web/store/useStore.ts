import { create } from "zustand";
import api from "../utils/axios";

type LoginSellerData = {
  phoneNo: string;
  password: string;
};

type SignupSellerData = {
  name: string;
  phoneNo: string;
  email: string;
  address: string;
  password: string;
};


type AuthStore = {
  myData: SignupSellerData;
  // loading: boolean;
  // isSellerFetched: boolean;
  // isAuthenticated: boolean;
  // isLoggedOut: boolean;
  // token: string | null;
  signupSellerData: SignupSellerData;
  loginSellerData: LoginSellerData;
  // setIsLoggedOut: (isLoggedOut: boolean) => void;

  //@ts-ignore
  setLoginSellerData: (SellerData: LoginSellerData) => void;
  setSignupSellerData: (SellerData: SignupSellerData) => void;
  signup: (body: SignupSellerData) => void;
  login: (body: LoginSellerData) => void;
  // logout: (router: AppRouterInstance) => void;
  // getMyData: () => void;
  // updateMyData: (updatedData: SignupSellerData) => void;
};

const useSellerStore = create<AuthStore>((set) => ({
  myData: {
    name: "",
    phoneNo: "",
    email: "",
    address: "",
    password: "",
  },

  signupSellerData: {
    name: "",
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

  login: async (userData: LoginSellerData) => {
    const res = await api.post("/login", userData);
    console.log(res);
  },

  signup: async (userData: SignupSellerData) => {
    const res = await api.post("/signup", userData);
    console.log(res.data);
  },
}));

export default useSellerStore;

// const useAuthStore = create<AuthStore>(set => ({
//   token: null,
//   loading: false,
//   isAuthenticated: false,
//   isLoggedOut: false,
//   isUserFetched: false,
//   myData: {
//     email: '',
//     password: '',
//   },
//   signupUserData: {
//     email: '',
//     password: '',
//   },
//   loginUserData: {
//     email: '',
//     password: '',
//   },
//   setIsLoggedOut: (isLoggedOut: boolean) => set({ isLoggedOut }),
//   setSignupUserData: (userData: UserData) => set({ signupUserData: userData }),
//   setLoginUserData: (userData: Pick<UserData, 'email' | 'password'>) => set({ loginUserData: userData }),
//   login: async (router) => {
//     set({ loading: true });
//     try {
//       const data = useAuthStore.getState().loginUserData;
//       const response = await api.post('/auth/login', data);
//       setItem({ key: 'token', data: response.data.data.token });
//       toast.success(response.data.message);
//       set({
//         token: response.data.data.token, loading: false, isAuthenticated: true, loginUserData: {
//           email: '',
//           password: '',
//         }
//       });
//       router.push(SubSections[1][0].path);
//     } catch (error: any) {
//       set({ loading: false, isAuthenticated: false });
//       if (error.response && error.response.data && error.response.data.message) {
//         const errorMessage = Array.isArray(error.response.data.message)
//           ? error.response.data.message.join(', ')
//           : error.response.data.message;
//         toast(errorMessage);
//       } else {
//         toast.error('An error occurred during signup.');
//       }
//     }
//   },
//   signup: async (router) => {
//     try {
//       set({ loading: true });
//       const data = useAuthStore.getState().signupUserData;
//       const response = await api.post('/auth/signup', data);
//       setItem({ key: 'token', data: response.data.data.token });
//       toast.success(response.data.message);
//       set({
//         loading: false, token: response.data.data.token, isAuthenticated: true, signupUserData: {
//           email: '',
//           password: '',
//         }
//       });
//       router.push(SubSections[1][0].path);
//     } catch (error: any) {
//       set({ loading: false, isAuthenticated: false });
//       if (error.response && error.response.data && error.response.data.message) {
//         const errorMessage = Array.isArray(error.response.data.message)
//           ? error.response.data.message.join(', ')
//           : error.response.data.message;
//         toast.error(errorMessage);
//       } else {
//         toast.error('An error occurred during signup.');
//       }
//     }
//   },
//   logout: (router) => {
//     set({ loading: true });
//     removeItem({
//       key: 'token'
//     })
//     set({ loading: false, isAuthenticated: false, isLoggedOut: true, isUserFetched: false, token: null, myData: { email: '', password: '' } });
//     router.push('/auth');
//     toast.success('Logged Out Successfully');
//   },
//   getMyData: async () => {
//     try {
//       set({ loading: true });
//       const response = await api.get('/user',{
//         headers: {
//           Authorization: Bearer ${getItem({ key: 'token' })}
//         }
//       });
//       set({ myData: response.data.data, loading: false, isAuthenticated: true, isUserFetched: true });
//     } catch (error: any) {
//       set({ loading: false, isAuthenticated: false, isUserFetched: false });
//     }
//   }
//   updateMyData: async (updatedData: UserData) => {
//     try {
//       set({ loading: true });
//       await api.patch('/user', updatedData);
//       set({ myData: updatedData, loading: false });
//       toast.success('User Info Updated Successfully');
//     } catch (error: any) {
//       set({ loading: false });
//       toast.error(error.response.data.message);
//     }
//   },
// }));

// export default useAuthStore;
