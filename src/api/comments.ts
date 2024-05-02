import axios from "axios";
import { CreateCommentType, LikeCommentActionType, Methods } from "./types";
import { Comment } from "../types/Prisma";
import toast from "react-hot-toast";

const commentsUrl = import.meta.env.VITE_COMMENTS_URL;
const AppEnv: "development" | "production" = import.meta.env.VITE_ENV;

type CommentResponse<T = Comment | Comment[] | undefined> = T extends undefined
  ? {
      message: string;
      status: number;
    }
  : {
      message: string;
      data: T;
      status: number;
    };

export const createComment = async (data: CreateCommentType) => {
  const method: Methods = Methods.POST;
  const url: string = commentsUrl;
  const withCredentials = true;

  try {
    const { data: res } = await axios<CommentResponse<Comment>>({
      method,
      url,
      data,
      withCredentials
    });
    toast.success("Commentaire publié avec succès");
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
    toast.error("Erreur lors de la publication du commentaire");
  }
};

export const updateComment = async (Id: string, content: string) => {
  const restPath: string = "/";
  const method: Methods = Methods.PATCH;
  const url: string = commentsUrl + restPath + Id;
  const data = { content };
  const withCredentials = true;

  try {
    const { data: res } = await axios<CommentResponse<Comment>>({
      method,
      url,
      data,
      withCredentials
    });
    toast.success("Commentaire mis à jour avec succès");
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
    toast.error("Erreur lors de la mise à jour du commentaire");
  }
};

export const deleteComment = async (Id: string) => {
  const restPath: string = "/";
  const url: string = commentsUrl + restPath + Id;
  const method: Methods = Methods.DELETE;
  const withCredentials = true;

  try {
    const { data: res } = await axios<CommentResponse>({ method, url, withCredentials });
    toast.success("Commentaire supprimé avec succès");
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
    toast.error("Erreur lors de la suppression du commentaire");
  }
};

export const getPostComments = async (postId: string) => {
  const method: Methods = Methods.GET;
  const url: string = commentsUrl;
  const data = { postId };
  const withCredentials = true;

  try {
    const { data: res } = await axios<CommentResponse<Comment[]>>({
      method,
      url,
      data,
      withCredentials
    });
    return res;
  } catch (error) {
    if (AppEnv !== "production") {
      console.error(error);
    }
  }
};

export const upLikeComment = async (Id: string, action: LikeCommentActionType) => {
  const restPath: string = "/like/";
  const method: Methods = Methods.PATCH;
  const url: string = commentsUrl + restPath + Id;
  const params = { action };
  const withCredentials = true;

  try {
    const { data: res } = await axios<CommentResponse>({
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

export const downLikeComment = async (Id: string, action: LikeCommentActionType) => {
  const method: Methods = Methods.PATCH;
  const restPath: string = "/dislike/";
  const url: string = commentsUrl + restPath + Id;
  const params = { action };
  const withCredentials = true;

  try {
    const { data: res } = await axios<CommentResponse>({
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
