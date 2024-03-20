"use client";

import { AppUIProvider } from "@repo/nextui-config";

export function Providers({ children }: { children: React.ReactNode }) {
  return <AppUIProvider>{children}</AppUIProvider>;
}
