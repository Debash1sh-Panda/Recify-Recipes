import CreateSvg from "@/app/svg/CreateSvg";
import React, { useState } from "react";
import { CreateCarousal } from "./CreateCarousal";
import Image from "next/image";

function CreateModal({ setHideContent }:{
    setHideContent: React.Dispatch<React.SetStateAction<boolean>>
}) {
  const [hide, setHide] = useState(true);
  const [files, setFiles] = useState<File[]>([]);
  const [urls, setUrls] = useState<string[]>([]);
  const [next, setNext] = useState(false);
  const [postComment, setPostComment]= useState<string>("");
  const [collaborators,setCollaborators]=useState<string>("");

  const FileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    setHide(false);
    const fileArray = Array.from(e.target.files);
    setFiles(fileArray);
    const newUrls = fileArray.map((file) => URL.createObjectURL(file));
    setUrls((prev) => [...prev, ...newUrls]);
  };

  const handleChange=(e:React.ChangeEvent<HTMLTextAreaElement>)=>{
    setPostComment(e.target.value)
  }


  const handleCollaboratorsChange=(e: React.ChangeEvent<HTMLInputElement> )=>{
    setCollaborators(e.target.value)
  }


  return (
    <div className="fixed top-0 left-0 w-full h-full bg-black/70 hidden md:flex justify-center items-center z-50">
      <div className="w-[800px] h-[500px] bg-black rounded-lg flex overflow-hidden">
        
        {/* Left Section - Image/Upload */}
        <div className="w-2/3 bg-black flex flex-col">
          {/* Header */}
          <div className="flex justify-between items-center h-[50px] border-b border-gray-700 px-4 py-2">
            <button
              onClick={() => setHideContent(false)}
              className="text-white text-lg font-bold"
            >
              ←
            </button>
            <h1 className="text-white font-semibold">
              {hide ? "Create new post" : "Preview"}
            </h1>
            {!hide && (
              <button
                onClick={() => setNext(true)}
                className="text-blue-500 font-semibold"
              >
                Share
              </button>
            )}
          </div>

          <div className="flex-1 flex justify-center items-center bg-[#2c2c2c]">
            {hide ? (
              <div className="flex flex-col items-center text-white">
                <CreateSvg />
                <p className="text-lg mt-2">Drag photos and videos here</p>
                <input
                  type="file"
                  hidden
                  id="file"
                  onChange={FileChange}
                  multiple
                />
                <label
                  htmlFor="file"
                  className="bg-blue-500 text-white rounded-md px-4 py-2 mt-5 cursor-pointer"
                >
                  Select from computer
                </label>
              </div>
            ) : (
              <div className="w-full h-full relative">
                <CreateCarousal data={urls} />
                {!next && (
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-gray-800/80 text-sm px-3 py-1 rounded-md">
                    Click photo to tag people
                  </div>
                )}
              </div>
            )}
          </div>
        </div>

        <div className="w-1/3 bg-black border-l border-gray-700 flex flex-col">
         
          <div className="flex items-center gap-3 p-3 border-b border-gray-700">
            <Image
              src="https://i.pravatar.cc/150?img=2"
              alt="User"
              width={20}
              height={20}
              className="rounded-full"
            />
            <span className="font-semibold text-white">somgorai268</span>
          </div>

          <div className="p-4 border-b border-gray-700 bg-[#2c2c2c]">
            <textarea
              className="w-full h-24 bg-transparent text-white text-sm resize-none outline-none"
              placeholder="Write a caption..."
              onChange={handleChange}
            />
            <div className="text-right text-gray-500 text-xs">{postComment.length ?? 0}/2200</div>
          </div>

          <div className="flex-1 text-sm text-gray-300 overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b border-gray-700 bg-[#2c2c2c]">
              <input type="text" onChange={handleCollaboratorsChange} className="border-0 outline-0 p-2" placeholder="Add Collaborators" />
              <span className="text-lg">👥</span>
            </div>
            <div className="flex justify-between items-center p-4 bg-[#2c2c2c]">
              <span>Share to</span>
              <span className="text-lg">⤴</span>
            </div>
          </div>

          <div className="p-4 border-t border-gray-700 text-sm text-gray-400">
            <div className="flex items-center mb-2">
              <Image
                src="https://i.pravatar.cc/150?img=3"
                alt="User"
                width={30}
                height={30}
                className="rounded-full mr-2"
              />
              <span className="text-white">somgorai268</span>
            </div>
            <p className="text-xs">Threads · Public</p>
            <p className="mt-2 text-xs">Accessibility</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateModal;
