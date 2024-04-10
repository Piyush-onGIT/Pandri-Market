"use client";
import { Inter } from "next/font/google";
// import AuthProvider from "../../../../providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        {/* <AuthProvider>{children}</AuthProvider> */}
      </body>
    </html>
  );
}
