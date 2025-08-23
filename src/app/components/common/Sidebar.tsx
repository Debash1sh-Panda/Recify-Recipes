"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { AiOutlineHome, AiFillHome } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import { PiVideoFill } from "react-icons/pi";
import { RiMessengerLine } from "react-icons/ri";
import { GoHeart, GoHeartFill } from "react-icons/go";
import { FiPlusSquare } from "react-icons/fi";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegCompass } from "react-icons/fa";
import { useState } from "react";
import CreateModal from "./CreateModal";

type Item = {
  label: string;
  href: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
};

const items: Item[] = [
  {
    label: "Home",
    href: "/home",
    icon: <AiOutlineHome size={24} />,
    activeIcon: <AiFillHome size={24} />,
  },
  { label: "Search", href: "/search", icon: <BiSearch size={24} /> },
  { label: "Explore", href: "/explore", icon: <FaRegCompass size={22} /> },
  { label: "Reels", href: "/reels", icon: <PiVideoFill size={22} /> },
  {
    label: "Messages",
    href: "/direct/inbox",
    icon: <RiMessengerLine size={22} />,
  },
  {
    label: "Notifications",
    href: "/notifications",
    icon: <GoHeart size={22} />,
    activeIcon: <GoHeartFill size={22} />,
  },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [hide, setHide]= useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const Create=()=>{
    setHide(!hide);
  }

  


  return (
    <>
      <aside
        className="
        hidden sm:flex fixed left-0 top-0 h-screen w-64 border-r border-gray-50
        bg-black z-30 flex-col justify-between
        px-3 py-6
      "
      >
        <div className="px-3">
          <Link href="/" className="inline-flex items-center">
            <Image
              src="/instagram-wordmark.svg"
              alt="Instagram"
              width={120}
              height={30}
              className="dark:invert-0"
            />
          </Link>
        </div>

        <nav className="mt-6 space-y-1">
          {items.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`
                  group flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium
                  transition-colors
                  ${
                    active
                      ? "bg-gray-100 text-black"
                      : "hover:bg-gray-100 hover:text-black"
                  }
                `}
              >
                <span className="w-6 h-6 flex items-center justify-center">
                  {active && item.activeIcon ? item.activeIcon : item.icon}
                </span>
                <span>{item.label}</span>
              </Link>
            );
          })}

          <div className="flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium hover:bg-gray-100 transition-colors hover:text-black" onClick={Create}>
            <span><FiPlusSquare size={20}/> </span><span>Create</span>
          </div>

          <Link
            href="/profile"
            className="group flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium hover:bg-gray-100 transition-colors"
          >
            <span className="w-6 h-6">
              <Image
                src="https://i.pravatar.cc/150?img=2"
                alt="Profile"
                width={24}
                height={24}
                className="rounded-full"
              />
            </span>
            <span>Profile</span>
          </Link>
        </nav>

        <button
          className="flex items-center gap-3 rounded-xl px-3 py-3 text-[15px] font-medium hover:bg-gray-100 transition-colors"
          type="button"
        >
          <HiOutlineMenu size={22} />
          <span>Logout</span>
        </button>
      </aside>

      <nav
        className="
        sm:hidden fixed bottom-0 left-0 right-0 z-30
        bg-white border-t border-gray-200
      "
      >
        <div className="mx-auto max-w-md grid grid-cols-5">
          {[
            { href: "/home", icon: <AiOutlineHome size={24} /> },
            { href: "/search", icon: <BiSearch size={24} /> },
            { href: "/reels", icon: <PiVideoFill size={22} /> },
            { href: "/notifications", icon: <GoHeart size={22} /> },
            {
              href: "/profile",
              icon: (
                <Image
                  src="https://i.pravatar.cc/150?img=2"
                  alt="Me"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
              ),
            },
          ].map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className={`
                flex items-center justify-center py-3
                ${isActive(it.href) ? "text-black" : "text-gray-700"}
              `}
            >
              {it.icon}
            </Link>
          ))}
        </div>
      </nav>

      <div className="hidden sm:block w-64" />
        
 
      {hide && <CreateModal setHideContent={setHide}/>}
    
  
    </>
  );
}
