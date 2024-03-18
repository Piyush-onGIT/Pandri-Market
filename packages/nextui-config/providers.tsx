"use client";

import React from "react";
import { NextUIProvider } from "@nextui-org/react";

type ProvidersProps = {
  children: React.ReactNode;
};

type AppUIProviderProps = ProvidersProps & {};

export const AppUIProvider = ({ children }: AppUIProviderProps) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
