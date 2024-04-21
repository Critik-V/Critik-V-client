import axios from "axios";
import { CreatePostType, FavActionType, Methods, SinglePostType, UpdatePostType } from "./types";
import { Post } from "../types/Prisma";

type PostResponse<T = Post | Post[] | undefined> = T extends undefined
  ? {
      message: string;
      status: number;
    }
  : {
      message: string;
      data: T;
      status: number;
      totalPage?: number;
    };

const postsUrl: string = import.meta.env.VITE_POSTS_URL;

export const getPosts = async (page: number) => {
  const method: Methods = Methods.GET;
  const url: string = postsUrl;
  const params = { page };

  try {
    const { data: res } = await axios<PostResponse<Post[]>>({ method, url, params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (data: CreatePostType) => {
  const method: Methods = Methods.POST;
  const url: string = postsUrl;

  try {
    const { data: res } = await axios<PostResponse<Post>>({ method, url, data });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (Id: string, data: UpdatePostType) => {
  const restPath: string = "/";
  const method: Methods = Methods.PATCH;
  const url: string = postsUrl + restPath + Id;

  try {
    const { data: res } = await axios<PostResponse>({ method, url, data });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (Id: string) => {
  const restPath: string = "/";
  const method: Methods = Methods.DELETE;
  const url: string = postsUrl + restPath + Id;
  try {
    const { data: res } = await axios<PostResponse>({ method, url });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getArchivedPost = async (Id: string, authorId: string, page: number) => {
  const restPath: string = "/archive";
  const url: string = postsUrl + restPath + Id;
  const data = { authorId };
  const method: Methods = Methods.GET;
  const params = { page };
  try {
    const { data: res } = await axios<PostResponse<Post[]>>({ method, url, data, params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const archivePost = async (Id: string, data: SinglePostType) => {
  const restPath: string = "/archive";
  const url: string = postsUrl + restPath + Id;
  const method: Methods = Methods.PATCH;
  try {
    const { data: res } = await axios<PostResponse<Post[]>>({ method, url, data });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getMyPosts = async (authorId: string, page: number) => {
  const restPath: string = "/mine";
  const url: string = postsUrl + restPath;
  const method: Methods = Methods.GET;
  const data = { authorId };
  const params = { page };
  try {
    const { data: res } = await axios<PostResponse<Post[]>>({ method, url, data, params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getArchivedPosts = async (authorId: string, page: number) => {
  const restPath: string = "/archived";
  const url: string = postsUrl + restPath;
  const data = { authorId };
  const method: Methods = Methods.GET;
  const params = { page };
  try {
    const { data: res } = await axios<PostResponse<Post[]>>({ method, url, data, params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getFavoritePosts = async (userId: string, page: number) => {
  const restPath: string = "/fav";
  const url: string = postsUrl + restPath;
  const method: Methods = Methods.GET;
  const data = { userId };
  const params = { page };
  try {
    const { data: res } = await axios<PostResponse<Post[]>>({ method, url, data, params });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const favoritePost = async (data: { id: string; userId: string }, action: FavActionType) => {
  const restPath: string = "/fav";
  const url: string = postsUrl + restPath;
  const method: Methods = Methods.PATCH;
  try {
    const { data: res } = await axios<PostResponse<Post[]>>({
      method,
      params: { action },
      url,
      data
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (Id: string) => {
  const restPath: string = "/";
  const url: string = postsUrl + restPath + Id;
  const method: Methods = Methods.GET;
  try {
    const { data: res } = await axios<PostResponse<Post>>({ method, url });
    return res;
  } catch (error) {
    console.log(error);
  }
};
