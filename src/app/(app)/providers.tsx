"use client";
import { SessionProvider } from "next-auth/react";
import ContextProvider from "../context/ContextProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ContextProvider>{children}</ContextProvider>
    </SessionProvider>
  );
}
