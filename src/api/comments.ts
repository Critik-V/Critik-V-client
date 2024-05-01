import axios from "axios";
import { CreateCommentType, LikeCommentActionType, Methods, UpdateCommentType } from "./types";

const commentsUrl = import.meta.env.VITE_COMMENTS_URL;

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
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const updateComment = async (Id: string, data: UpdateCommentType) => {
  const restPath: string = "/";
  const method: Methods = Methods.PATCH;
  const url: string = commentsUrl + restPath + Id;
  const withCredentials = true;

  try {
    const { data: res } = await axios<CommentResponse<Comment>>({
      method,
      url,
      data,
      withCredentials
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (Id: string, authorId: string) => {
  const restPath: string = "/";
  const url: string = commentsUrl + restPath + Id;
  const data = { authorId };
  const method: Methods = Methods.DELETE;
  const withCredentials = true;

  try {
    const { data: res } = await axios<CommentResponse>({ method, url, data, withCredentials });
    return res;
  } catch (error) {
    console.log(error);
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
    console.log(error);
  }
};

export const upLikeComment = async (Id: string, userId: string, action: LikeCommentActionType) => {
  const restPath: string = "/like/";
  const method: Methods = Methods.PATCH;
  const url: string = commentsUrl + restPath + Id;
  const data = { userId };
  const params = { action };
  const withCredentials = true;

  try {
    const { data: res } = await axios<CommentResponse>({
      method,
      url,
      data,
      params,
      withCredentials
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};

export const downLikeComment = async (
  Id: string,
  userId: string,
  action: LikeCommentActionType
) => {
  const method: Methods = Methods.PATCH;
  const restPath: string = "/dislike/";
  const url: string = commentsUrl + restPath + Id;
  const data = { userId };
  const params = { action };
  const withCredentials = true;

  try {
    const { data: res } = await axios<CommentResponse>({
      method,
      url,
      data,
      params,
      withCredentials
    });
    return res;
  } catch (error) {
    console.log(error);
  }
};
