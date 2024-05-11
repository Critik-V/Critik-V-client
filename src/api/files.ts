import axios from "axios";
import { Methods } from "./types";

const resumeImgUrl: string = import.meta.env.VITE_FILES_URL;
const AppEnv: "development" | "production" = import.meta.env.VITE_ENV;

export const getPostResume = async (postId: string) => {
  const method: Methods = Methods.GET;
  const fileExtension: string = ".jpg";
  const url: string = resumeImgUrl + "/" + postId + fileExtension;
  const withCredentials: boolean = true;

  try {
    const { data: res } = await axios({
      method,
      url,
      withCredentials,
      responseType: "blob"
    });
    const imageBlob = new Blob([res], { type: "image/jpeg" });
    const imageUrl = URL.createObjectURL(imageBlob);
    return imageUrl;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
  }
};
