"use client";

import Image from "next/image";
import React from "react";
import { FiHeart, FiMessageCircle, FiSend } from "react-icons/fi";

const dummyPosts = [
  {
    id: 1,
    username: "john_doe",
    profilePic: "https://i.pravatar.cc/150?img=1",
    postImage: "https://picsum.photos/500/400?random=1",
    caption: "Exploring the mountains 🏔️ #adventure",
  },
  {
    id: 2,
    username: "jane_smith",
    profilePic: "https://i.pravatar.cc/150?img=2",
    postImage: "https://picsum.photos/500/400?random=2",
    caption: "Chillin’ at the beach 🌊☀️",
  },
  {
    id: 3,
    username: "alex_99",
    profilePic: "https://i.pravatar.cc/150?img=3",
    postImage: "https://picsum.photos/500/400?random=3",
    caption: "Late night coding session 💻🔥",
  },
];

export default function Page() {

  return (
    <div className="flex justify-center min-h-screen py-10 w-full">
      <div className="w-full max-w-md">
        {dummyPosts.map((post) => (
          <div
            key={post.id}
            className="bg-white border border-gray-200 rounded-lg mb-6 shadow-sm text-black"
          >
            {/* Profile Section */}
            <div className="flex items-center gap-3 px-4 py-3">
              <Image
                src={post.profilePic}
                alt={post.username}
                className="w-10 h-10 rounded-full"
                width={300}
                height={300}
              />
              <p className="font-semibold text-sm">{post.username}</p>
            </div>

            {/* Post Image */}
            <div>
              <Image
                src={post.postImage}
                alt="post"
                className="w-full max-h-[500px] object-cover"
                width={300}
                height={300}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-4 px-4 py-3 text-black">
              <FiHeart size={22} className="cursor-pointer" />
              <FiMessageCircle size={22} className="cursor-pointer" />
              <FiSend size={22} className="cursor-pointer" />
            </div>

            {/* Caption */}
            <div className="px-4 pb-3">
              <p className="text-sm text-black">
                <span className="font-semibold">{post.username} </span>
                {post.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
