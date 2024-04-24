import axios from "axios";
import { CreatePostType, FavActionType, Methods, UpdatePostType } from "./types";
import { Post } from "../types/Prisma";
import toast from "react-hot-toast";

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
    // toast.error("Une erreur s'est produite");
  }
};

export const createPost = async (data: CreatePostType) => {
  const method: Methods = Methods.POST;
  const url: string = postsUrl;


  try {
    const { data: res } = await axios<PostResponse<Post>>({ method, url, data });
    toast.success("Post créé avec succès");
    return res;
  } catch (error) {
    console.error(error);
    toast.error("le post n'a pas pu être créé");
  }
};

export const updatePost = async (Id: string, data: UpdatePostType) => {
  const restPath: string = "/";
  const method: Methods = Methods.PATCH;
  const url: string = postsUrl + restPath + Id;

  try {
    const { data: res } = await axios<PostResponse>({ method, url, data });
    toast.success("Post modifié avec succès");
    return res;
  } catch (error) {
    toast.error("le post n'a pas pu être modifié");
  }
};

export const deletePost = async (Id: string) => {
  const restPath: string = "/";
  const method: Methods = Methods.DELETE;
  const url: string = postsUrl + restPath + Id;
  try {
    const { data: res } = await axios<PostResponse>({ method, url });
    toast.success("Post supprimé avec succès");
    return res;
  } catch (error) {
    toast.error("le post n'a pas pu être supprimé");
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
    // toast.error("Une erreur s'est produite");
  }
};

export const archivePost = async (postId: string, authorId: string) => {
  const restPath: string = "/archive/";
  const url: string = postsUrl + restPath + postId;
  const data = { authorId };
  const method: Methods = Methods.PATCH;
  try {
    const { data: res } = await axios<PostResponse<Post[]>>({ method, url, data });
    toast.success("Post archivé avec succès");
    return res;
  } catch (error) {
    toast.error("le post n'a pas pu être archivé");
  }
};

export const unarchivePost = async (postId: string, authorId: string) => {
  const restPath: string = "/unarchive/";
  const url: string = postsUrl + restPath + postId;
  const data = { authorId };
  const method: Methods = Methods.PATCH;
  try {
    const { data: res } = await axios<PostResponse<Post[]>>({ method, url, data });
    toast.success("Post désarchivé avec succès");
    return res;
  } catch (error) {
    toast.error("le post n'a pas pu être désarchivé");
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
    // toast.error("Une erreur s'est produite");
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
    // toast.error("Une erreur s'est produite");
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
    // toast.error("Une erreur s'est produite");
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
    toast.success("Post ajouté à vos favoris");
    return res;
  } catch (error) {
    toast.error("Une erreur s'est produite");
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
    // toast.error("Une erreur s'est produite");
  }
};
