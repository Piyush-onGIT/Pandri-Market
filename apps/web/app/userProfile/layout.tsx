"use client";
import { Inter } from "next/font/google";
import useSellerStore from "../../store/useSellerStore";
import Login from "../login/page";
// import { Providers } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const { isAuthenticated } = useSellerStore();
  return (
    <html lang="en">
      <body className={inter.className}>
        {isAuthenticated ? children : <Login />}
        {/* <Providers>{children}</Providers> */}
      </body>
    </html>
  );
}
