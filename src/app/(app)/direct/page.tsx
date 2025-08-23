"use client";
import Image from "next/image";
import { useState } from "react";
import { FiEdit2 } from "react-icons/fi";
import { BsMessenger } from "react-icons/bs";


export default function Page() {


  const [messages] = useState([
    {
      id: 1,
      name: "Parody • Sushant Singh Rajput",
      preview: "Tumhare saa...",
      time: "1h",
      avatar: "https://i.pravatar.cc/40?img=5",
    },
    {
      id: 2,
      name: "d.",
      preview: "sent an attachment",
      time: "2d",
      avatar: "https://i.pravatar.cc/40?img=8",
    },
    {
      id: 3,
      name: "Superman",
      preview: "I'm DYING to know...",
      time: "3d",
      avatar: "https://i.pravatar.cc/40?img=11",
    },
    {
      id: 4,
      name: "Som Gorai",
      preview: "sent an attachment",
      time: "5d",
      avatar: "https://i.pravatar.cc/40?img=14",
    },
  ]);

  return (
    <div className={`flex h-screen bg-black text-white w-full`}>

      <div className=" w-[25vw] p-2 border-r border-gray-800 flex flex-col">

        <div className="flex items-center justify-between p-4 border-b border-gray-800">
          <h1 className="font-semibold text-lg">somgorai268</h1>
          <FiEdit2 size={20} className="cursor-pointer" />
        </div>

        <div className="p-3">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#262626] text-white px-4 py-2 rounded-lg focus:outline-none placeholder-gray-400"
          />
        </div>

        <div className="flex justify-between px-4 py-2 text-sm font-semibold border-b border-gray-800">
          <span className="text-white">Messages</span>
          <span className="text-gray-400">Requests</span>
        </div>

        {/* Messages List */}
        <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-black">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className="flex items-center gap-3 px-4 py-3 hover:bg-[#1a1a1a] cursor-pointer"
            >
              <Image
                src={msg.avatar}
                alt={msg.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="flex flex-col">
                <p className="text-sm font-medium">{msg.name}</p>
                <p className="text-xs text-gray-400">{msg.preview} • {msg.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="border border-gray-400 rounded-full p-6 mb-4">
          <BsMessenger size={40} />
        </div>
        <h2 className="text-lg font-semibold">Your messages</h2>
        <p className="text-gray-400 text-sm mb-4">
          Send a message to start a chat.
        </p>
        <button className="bg-blue-600 px-4 py-2 rounded-lg text-sm font-medium">
          Send message
        </button>
      </div>
    </div>
  );
}
