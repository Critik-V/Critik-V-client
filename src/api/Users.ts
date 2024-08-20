import axios, { AxiosError } from "axios";
import { Methods } from "./types";
import toast from "react-hot-toast";
import { updateUserData } from "@types";
import { findErrorMessage } from "@errors";

const userUrl: string = import.meta.env.VITE_USERS_URL;
const AppEnv: "development" | "production" = import.meta.env.VITE_ENV;

export const updateUser = async (data: updateUserData) => {
  const method: Methods = Methods.PATCH;
  const url: string = userUrl;
  const withCredentials = true;

  try {
    const { data: res } = await axios({
      method,
      url,
      data,
      withCredentials
    });
    toast.success("Vôtre profil a été mis à jour avec succès");
    return res;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (AppEnv !== "production") {
        console.error(error);
      }
      toast.error(findErrorMessage(error.response?.data.message));
    }
  }
};
