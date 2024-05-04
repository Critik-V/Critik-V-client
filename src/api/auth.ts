import axios, { AxiosResponse } from "axios";
import { Methods } from "./types";
import toast from "react-hot-toast";
import { redirect } from "react-router-dom";
import { User } from "../types/Prisma";

const AppEnv: "development" | "production" = import.meta.env.VITE_ENV;

export const login = () => (window.location.href = import.meta.env.VITE_API_GOOGLE + "/login");

export const logout = async (): Promise<AxiosResponse | undefined> => {
  const url: string = import.meta.env.VITE_API_GOOGLE + "/logout";
  const method: Methods = Methods.GET;
  const withCredentials = true;

  try {
    const res = await axios<AxiosResponse>({ method, url, withCredentials });
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
    toast.error("Une erreur s'est produite");
  }
};

export const getMe = async () => {
  const url: string = import.meta.env.VITE_API_GOOGLE + "/user";
  const method: Methods = Methods.GET;
  const withCredentials = true;

  try {
    const res = await axios<User>({ method, url, withCredentials });
    return res.data;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
    redirect("/login");
  }
};

export const isAuthenticated = async (): Promise<{ isAuth: boolean } | undefined> => {
  const url: string = import.meta.env.VITE_API_GOOGLE + "/is-authenticated";
  const method: Methods = Methods.GET;
  const withCredentials = true;

  try {
    const res = await axios<{ isAuth: boolean }>({ method, url, withCredentials });
    return res.data;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
    redirect("/login");
  }
};
