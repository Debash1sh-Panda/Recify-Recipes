import React, { SetStateAction, useEffect, useRef } from "react";
import { LuX } from "react-icons/lu";

function SearchComponent({searchHide,setSearchHide}:{
  searchHide:boolean;
  setSearchHide: React.Dispatch<SetStateAction<boolean>>;
}) {

  const searchRef= useRef<HTMLDivElement>(null);
  
  useEffect(()=>{
    
    const mouseDown=(e:MouseEvent)=>{
      if(searchRef.current && !searchRef.current.contains(e.target as Node)){
        setSearchHide(false);
      }
    }

    document.addEventListener("mousedown",mouseDown);
    return()=>{
      document.removeEventListener("mousedown",mouseDown);
    }
  },[searchRef]);

  return (
    <div className={`fixed right-0 top-0 h-screen w-[25vw] bg-black text-white border-r border-gray-800 p-6 transition-all duration-1000 ease-in-out z-30 ${searchHide === false ? "translate-x-full": "translate-x-0"}`} ref={searchRef}>

      <div className="flex justify-between">      
      <h1 className="text-2xl font-bold mb-6">Search</h1>
      <span><LuX size={25} onClick={()=>setSearchHide(false)} className="cursor-pointer"/></span>
      </div>
     
      <div className="w-full mb-6">
        <input
          type="text"
          className="w-full bg-[#262626] text-white placeholder-gray-400 px-4 py-2 rounded-lg focus:outline-none"
          placeholder="Search"
        />
      </div>

    
      <div className="border-t border-gray-800 mb-4"></div>

  
      <h2 className="text-lg font-semibold mb-3">Recent</h2>

      <div className="flex flex-col gap-2">
        
        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#1a1a1a] cursor-pointer transition">
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div>
            <p className="text-sm font-semibold">pasta_recipe</p>
            <p className="text-xs text-gray-400">Recipe category</p>
          </div>
        </div>

        <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#1a1a1a] cursor-pointer transition">
          <div className="w-10 h-10 bg-gray-700 rounded-full"></div>
          <div>
            <p className="text-sm font-semibold">vegan_salad</p>
            <p className="text-xs text-gray-400">Healthy recipes</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchComponent;
