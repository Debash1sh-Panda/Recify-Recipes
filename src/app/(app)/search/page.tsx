"use client";
import Image from "next/image";
import React, { useState } from "react";

function Page() {
  const [searchText, setSearchText] = useState("");


  const handleText=(e: React.ChangeEvent<HTMLInputElement>)=>{
    setSearchText(e.target.value);
  }





  return (
   <div className="w-full min-h-screen md:hidden">
        <div className="flex flex-col w-full p-2">

            <h1 className="text-2xl">Search</h1>
            <input type="text" placeholder="Search User" onChange={handleText} className="min-w-[290px] bg-gray-200 rounded-md p-1 placeholder:tetx-gray-500 outline-0"/>

            <p className="my-2 mx-2">Recent</p>

            <div className="flex gap-4 p-2">
                <div>
                 <Image src="" alt="" className="w-10 h-10 rounded-full"/>
                </div>
                <div className="flex flex-col">
                <p>narendramodi</p>
                <p>Narendra Modi</p>
                </div>
            </div>
        </div>
   </div>
  );
}

export default Page;