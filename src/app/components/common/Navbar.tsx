"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-teal-500 rounded-full" />
        <span className="text-xl font-bold">Recipe Fiesta</span>
      </div>

      <div className="hidden md:flex items-center justify-between space-x-8 text-gray-300 font-medium bg-[#1a1a1a] backdrop-blur-lg px-8 py-3 rounded-full border border-white/30">
        <a href="#features" className="hover:text-white transition">
          Features
        </a>
        <a href="#pricing" className="hover:text-white transition">
          Pricing
        </a>
        <a href="#faqs" className="hover:text-white transition">
          FAQs
        </a>
      </div>

      <button className="px-5 py-2 bg-gradient-to-r from-green-400 to-teal-500 text-black rounded-full font-semibold shadow-md hover:scale-105 transition">
        <Link href="/auth/login">Log In →</Link>
      </button>
    </nav>
  );
}
