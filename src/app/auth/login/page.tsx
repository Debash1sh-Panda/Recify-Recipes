"use client";

import LoginForm from "@/app/components/auth/LoginForm";
import { Carousel } from "@/app/components/common/Carousel";
import React from "react";

export default function Page() {
  return (
    <div className="w-[100vw] min-h-screen flex justify-center items-center gap-2">
      <div className="flex justify-center items-center flex-col w-[100vw] md:w-[50vw]">
        <LoginForm />
      </div>
      <div className="w-[100vw] md:w-[50vw] h-[100vh] hidden md:block">
        <Carousel />
      </div>
      
    </div>
  );
}
