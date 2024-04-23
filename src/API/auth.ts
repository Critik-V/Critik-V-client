import axios, { AxiosResponse } from "axios";
import { Methods } from "./types";
import toast from "react-hot-toast";

export const login = async (): Promise<void> => {
  const url: string = import.meta.env.VITE_API_URL + "/login";
  const method: Methods = Methods.GET;

  try {
    await axios<void>({ method, url });
  } catch (error) {
    toast.error("Une erreur s'est produite");
  }
};

export const logout = async (): Promise<AxiosResponse | undefined> => {
  const url: string = import.meta.env.VITE_API_URL + "/logout";
  const method: Methods = Methods.GET;

  try {
    const res = await axios<AxiosResponse>({ method, url });
    return res;
  } catch (error) {
    toast.error("Une erreur s'est produite");
  }
};
