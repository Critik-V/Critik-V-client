import axios from "axios";
import {
  CreateCommentType,
  LikeCommentActionType,
  UpdateCommentType,
} from "./types";

const commentsUrl = import.meta.env.VITE_COMMENTS_URL;

export const createComment = async (Data: CreateCommentType) => {
  try {
    const { data } = await axios.post(commentsUrl, {
      data: Data,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateComment = async (Id: string, Data: UpdateCommentType) => {
  const restPath: string = "/";
  try {
    const { data } = await axios.patch(commentsUrl + restPath + Id, {
      data: Data,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deleteComment = async (Id: string, authorId: string) => {
  const restPath: string = "/";

  try {
    const { data } = await axios.delete(commentsUrl + restPath + Id, {
      data: { authorId },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPostComments = async (postId: string) => {
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
) => {
  const restPath: string = "/like/";

  try {
    const { data } = await axios({
      method: "patch",
      url: commentsUrl + restPath + Id,
      data: {
        userId,
      },
      params: { action },
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
) => {
  const restPath: string = "/dislike/";
  try {
    const { data } = await axios({
      method: "patch",
      url: commentsUrl + restPath + Id,
      data: {
        userId,
      },
      params: { action },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};
