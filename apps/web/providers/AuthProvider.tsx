import { useEffect } from "react";
import useSellerStore from "../store/useSellerStore";
import Login from "../app/login/page";
import Loader from "../components/Loader";

const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const { isAuthenticated, profile, isLoading, getMyShops } = useSellerStore();

  useEffect(() => {
    profile();
    getMyShops();
  }, [isAuthenticated]);

  return isLoading ? <Loader /> : isAuthenticated ? <>{children}</> : <Login />;
};

export default AuthProvider;
