import axios, { AxiosResponse } from "axios";
import { CreatePostType, FavActionType, Methods, SinglePostType, UpdatePostType } from "./types";

const postsUrl: string = import.meta.env.VITE_POSTS_URL;

export const getPosts = async (): Promise<AxiosResponse | undefined> => {
  const method: Methods = Methods.GET;
  const url: string = postsUrl;

  try {
    const { data } = await axios<AxiosResponse>({ method, url });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (data: CreatePostType) => {
  const method: Methods = Methods.POST;
  const url: string = postsUrl;

  try {
    const { data: res } = await axios<AxiosResponse>({ method, url, data });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (
  Id: string,
  data: UpdatePostType
): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/";
  const method: Methods = Methods.PATCH;
  const url: string = postsUrl + restPath + Id;

  try {
    const { data: res } = await axios<AxiosResponse>({ method, url, data });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (Id: string): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/";
  const method: Methods = Methods.DELETE;
  const url: string = postsUrl + restPath + Id;
  try {
    const { data: res } = await axios<AxiosResponse>({ method, url });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getArchivedPost = async (
  Id: string,
  data: SinglePostType
): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/archive";
  const url: string = postsUrl + restPath + Id;
  const method: Methods = Methods.GET;
  try {
    const { data: res } = await axios<AxiosResponse>({ method, url, data });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const archivePost = async (
  Id: string,
  data: SinglePostType
): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/archive";
  const url: string = postsUrl + restPath + Id;
  const method: Methods = Methods.PATCH;
  try {
    const { data: res } = await axios<AxiosResponse>({ method, url, data });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getMyPosts = async (authorId: string): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/mine";
  const url: string = postsUrl + restPath;
  const method: Methods = Methods.GET;
  const data = { authorId };
  try {
    const { data: res } = await axios<AxiosResponse>({ method, url, data });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getArchivedPosts = async (authorId: string): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/archived";
  const url: string = postsUrl + restPath;
  const method: Methods = Methods.GET;
  try {
    const { data: res } = await axios<AxiosResponse>({ method, url, data: { authorId } });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const favoritePost = async (
  data: { id: string; userId: string },
  action: FavActionType
): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/fav";
  const url: string = postsUrl + restPath;
  const method: Methods = Methods.PATCH;
  try {
    const { data: res } = await axios<AxiosResponse>({ method, params: { action }, url, data });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (Id: string): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/";
  const url: string = postsUrl + restPath + Id;
  const method: Methods = Methods.GET;
  try {
    const { data: res } = await axios<AxiosResponse>({ method, url });
    return res;
  } catch (error) {
    console.log(error);
  }
};
