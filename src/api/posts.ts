import axios, { AxiosError } from "axios";
import { CreatePostType, FavActionType, Methods, UpdatePostType } from "./types";
import { Post } from "../types/Prisma";
import toast from "react-hot-toast";
import { SearchInputType } from "@types";
import { findErrorMessage } from "@errors";

type PostResponse<T = Post | Post[] | boolean | undefined> = T extends undefined
  ? {
      message: string;
      status: string;
      statusCode: number;
    }
  : {
      message: string;
      data: T;
      status: string;
      statusCode: number;
      totalPages?: number;
    };

const postsUrl: string = import.meta.env.VITE_POSTS_URL;
const AppEnv: "development" | "production" = import.meta.env.VITE_ENV;

export const getPosts = async (page: number, data: SearchInputType) => {
  const { search, jobType, experienceLevel } = data;
  const method: Methods = Methods.GET;
  const url: string = postsUrl;
  const params = {
    page,
    search: search ? search : undefined,
    jobType: jobType ? jobType : undefined,
    experienceLevel: experienceLevel ? experienceLevel : undefined
  };
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse<Post[]>>({
      method,
      url,
      params,
      withCredentials
    });
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
  }
};

export const createPost = async (data: CreatePostType) => {
  const method: Methods = Methods.POST;
  const url: string = postsUrl;
  const headers = { "Content-Type": "multipart/form-data" };
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse<Post>>({
      method,
      url,
      data,
      headers,
      withCredentials
    });
    toast.success("Post créé avec succès");
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

export const updatePost = async (Id: string, data: UpdatePostType) => {
  const restPath: string = "/";
  const method: Methods = Methods.PATCH;
  const url: string = postsUrl + restPath + Id;
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse>({ method, url, data, withCredentials });
    toast.success("Post modifié avec succès");
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

export const deletePost = async (Id: string) => {
  const restPath: string = "/";
  const method: Methods = Methods.DELETE;
  const url: string = postsUrl + restPath + Id;
  const withCredentials = true;
  try {
    const { data: res } = await axios<PostResponse>({ method, url, withCredentials });
    toast.success("Post supprimé avec succès");
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

export const getArchivedPost = async (Id: string, page: number) => {
  const restPath: string = "/archive";
  const url: string = postsUrl + restPath + Id;
  const method: Methods = Methods.GET;
  const params = { page };
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse<Post[]>>({
      method,
      url,
      params,
      withCredentials
    });
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
  }
};

export const archivePost = async (postId: string) => {
  const restPath: string = "/archive/";
  const url: string = postsUrl + restPath + postId;
  const method: Methods = Methods.PATCH;
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse<Post[]>>({ method, url, withCredentials });
    toast.success("Post archivé avec succès");
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

export const unarchivePost = async (postId: string) => {
  const restPath: string = "/unarchive/";
  const url: string = postsUrl + restPath + postId;
  const method: Methods = Methods.PATCH;
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse<Post[]>>({ method, url, withCredentials });
    toast.success("Post désarchivé avec succès");
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

export const getMyPosts = async (page: number) => {
  const restPath: string = "/mine";
  const url: string = postsUrl + restPath;
  const method: Methods = Methods.GET;

  const params = { page };
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse<Post[]>>({
      method,
      url,
      params,
      withCredentials
    });
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
  }
};

export const getArchivedPosts = async (page: number) => {
  const restPath: string = "/archived";
  const url: string = postsUrl + restPath;
  const method: Methods = Methods.GET;
  const params = { page };
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse<Post[]>>({
      method,
      url,
      params,
      withCredentials
    });
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
  }
};

export const getFavoritePosts = async (page: number, data: SearchInputType) => {
  const { search, jobType, experienceLevel } = data;
  const restPath: string = "/fav";
  const url: string = postsUrl + restPath;
  const method: Methods = Methods.GET;
  const params = {
    page,
    search: search ? search : undefined,
    jobType: jobType ? jobType : undefined,
    experienceLevel: experienceLevel ? experienceLevel : undefined
  };
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse<Post[]>>({
      method,
      url,
      params,
      withCredentials
    });
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
  }
};

export const favoritePost = async (id: string, action: FavActionType) => {
  const restPath: string = "/fav";
  const url: string = postsUrl + restPath;
  const method: Methods = Methods.POST;
  const withCredentials = true;
  const data = { id };

  try {
    const { data: res } = await axios<PostResponse<Post[]>>({
      method,
      params: { action },
      url,
      data,
      withCredentials
    });
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

export const isFavPost = async (id: string) => {
  const restPath: string = "/isFav/";
  const url: string = postsUrl + restPath + id;
  const method: Methods = Methods.GET;
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse<boolean>>({
      method,
      url,
      withCredentials
    });
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
  }
};

export const getPost = async (Id: string) => {
  const restPath: string = "/";
  const url: string = postsUrl + restPath + Id;
  const method: Methods = Methods.GET;
  const withCredentials = true;

  try {
    const { data: res } = await axios<PostResponse<Post>>({ method, url, withCredentials });
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
  }
};
