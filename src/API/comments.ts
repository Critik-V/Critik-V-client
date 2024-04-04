import axios, { AxiosResponse } from "axios";
import { CreateCommentType, LikeCommentActionType, UpdateCommentType } from "./types";

const commentsUrl = import.meta.env.VITE_COMMENTS_URL;

export const createComment = async (
  Data: CreateCommentType
): Promise<AxiosResponse | undefined> => {
  try {
    const { data } = await axios.post(commentsUrl, {
      data: Data
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateComment = async (
  Id: string,
  Data: UpdateCommentType
): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/";
  try {
    const { data } = await axios.patch(commentsUrl + restPath + Id, {
      data: Data
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (
  Id: string,
  authorId: string
): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/";

  try {
    const { data } = await axios.delete(commentsUrl + restPath + Id, {
      data: { authorId }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostComments = async (postId: string): Promise<AxiosResponse | undefined> => {
  try {
    const { data } = await axios.get(commentsUrl, { data: { postId } });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const upLikeComment = async (
  Id: string,
  userId: string,
  action: LikeCommentActionType
): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/like/";

  try {
    const { data } = await axios({
      method: "patch",
      url: commentsUrl + restPath + Id,
      data: {
        userId
      },
      params: { action }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const downLikeComment = async (
  Id: string,
  userId: string,
  action: LikeCommentActionType
): Promise<AxiosResponse | undefined> => {
  const restPath: string = "/dislike/";
  try {
    const { data } = await axios({
      method: "patch",
      url: commentsUrl + restPath + Id,
      data: {
        userId
      },
      params: { action }
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
