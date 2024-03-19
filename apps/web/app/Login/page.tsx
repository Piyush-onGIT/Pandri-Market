import React from "react";
import Head from "next/head";
import LoginPage from "../../components/Login";

const Login = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-[#dddddd]">
      <Head>
        <title>Login</title>
      </Head>

      <main>
        <LoginPage />
      </main>
    </div>
  );
};

export default Login;
