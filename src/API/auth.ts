import axios, { AxiosResponse } from "axios";
import { Methods } from "./types";

export const login = async (): Promise<AxiosResponse | undefined> => {
  const url: string = import.meta.env.VITE_API_URL + "/login";
  const method: Methods = Methods.GET;

  try {
    const { data: res } = await axios<AxiosResponse>({ method, url });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const logout = async (): Promise<AxiosResponse | undefined> => {
  const url: string = import.meta.env.VITE_API_URL + "/logout";
  const method: Methods = Methods.GET;

  try {
    const { data: res } = await axios<AxiosResponse>({ method, url });
    return res;
  } catch (error) {
    console.log(error);
  }
};
