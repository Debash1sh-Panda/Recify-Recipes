"use client";

import RegisterForm from "@/app/components/auth/RegisterForm";
import { Carousel } from "@/app/components/common/Carousel";
import React from "react";

export default function Page() {
  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center gap-2">
      <div className="flex justify-center items-center flex-col w-[100vw] md:w-[50vw]">
        <RegisterForm />
      </div>
      <div className="flex-1 h-[100vh] hidden md:block">
        <Carousel />
      </div>
    </div>
  );
}
