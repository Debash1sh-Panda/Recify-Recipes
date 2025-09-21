"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FcGoogle } from "react-icons/fc";
import { MdEmail } from "react-icons/md";
import { FaEye, FaEyeSlash, FaLock } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const router= useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async(data:{email:string,password:string}) => {
    try {
      const response = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false
      });

      if (response?.error) {
        console.log(response);
        console.log("Signin error:", JSON.parse(response.error));
        alert(JSON.parse(response?.error)?.message);
      } else {
        router.push("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl p-8 w-[100vw] md:w-full max-w-md animate-fadeIn">
        <h1 className="text-[22px] md:text-3xl font-extrabold text-gray-900 text-center">
          Login Your Account
        </h1>
        <p className="mt-2 text-gray-500 text-center text-[14px] md:text-lg">
          Join the{" "}
          <span className="font-semibold text-blue-600">Recipe World</span>{" "}
          today! Discover, save & share mouth-watering recipes.
        </p>

        {/* ✅ Form with validation */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 mt-8"
        >
          {/* Email Field */}
          <div className="relative">
            <MdEmail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Email address"
              {...register("email")}
              className={`pl-10 p-3 w-full rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none transition`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password Field */}
          <div className="relative">
            <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              {...register("password")}
              className={`pl-10 pr-10 p-3 w-full rounded-lg border ${
                errors.password ? "border-red-500" : "border-gray-200"
              } bg-gray-50 text-gray-900 focus:ring-2 focus:ring-blue-400 focus:outline-none transition`}
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? (
                <FaEyeSlash className="w-5 h-5" />
              ) : (
                <FaEye className="w-5 h-5" />
              )}
            </button>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="mt-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium py-3 rounded-lg shadow-md transition transform hover:scale-[1.02] cursor-pointer"
          >
            Login
          </button>

          <div className="flex items-center gap-2 my-4">
            <div className="flex-1 h-px bg-gray-200"></div>
            <span className="text-gray-400 text-sm">or</span>
            <div className="flex-1 h-px bg-gray-200"></div>
          </div>

          {/* Google Auth */}
          <button
            type="button"
            className="flex items-center justify-center gap-2 border border-gray-300 py-3 rounded-lg text-gray-700 hover:bg-gray-50 transition"
          >
            <FcGoogle className="w-5 h-5" />
            <span className="text-[14px] md:text-md">Sign in with Google</span>
          </button>
        </form>

        {/* Signup Link */}
        <p className="text-gray-500 text-center mt-6">
          <span className="text-[14px] md:text-md">New User? </span>
          <Link
            href="/auth/register"
            className="text-blue-600 font-medium hover:underline"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}
