import axios from "axios";
import { getSession } from "next-auth/react";
import { CustomSession } from "./api/auth/[...nextauth]/route";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:5050/api/v1/recify",
});

axiosInstance.interceptors.request.use(
  async(config) => {

    const session= await getSession();
    const customSession= session as unknown as CustomSession;
    console.log("customSession", customSession);
    config.headers.Authorization = `Bearer ${customSession?.accessToken}`;
    return config;
  },
  (error) => {
    console.log("error", error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    console.log("response", response);
    return response;
  },
  (error) => {
    console.log("error", error);
  }
);
