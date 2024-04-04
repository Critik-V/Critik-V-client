import axios from "axios";
import {
  CreatePostType,
  FavActionType,
  SinglePostType,
  UpdatePostType,
} from "./types";

const postsUrl: string = import.meta.env.VITE_POSTS_URL;

export const getPosts = async () => {
  try {
    const { data } = await axios.get(postsUrl);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createPost = async (Data: CreatePostType) => {
  try {
    const { data } = await axios.post(postsUrl, {
      data: Data,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updatePost = async (Id: string, Data: UpdatePostType) => {
  const restPath: string = "/";

  try {
    const { data } = await axios.patch(postsUrl + restPath + Id, {
      data: Data,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const deletePost = async (Id: string) => {
  const restPath: string = "/";
  try {
    const { data } = await axios.delete(postsUrl + restPath + Id);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArchivedPost = async (Id: string, Data: SinglePostType) => {
  const restPath: string = "/archive";
  try {
    const { data } = await axios({
      url: postsUrl + restPath + Id,
      data: Data,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const archivePost = async (Id: string, Data: SinglePostType) => {
  const restPath: string = "/archive";
  try {
    const { data } = await axios.patch(postsUrl + restPath + Id, {
      Data,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getMyPosts = async (authorId: string) => {
  const restPath: string = "/mine";
  try {
    const { data } = await axios({
      method: "get",
      url: postsUrl + restPath,
      data: {
        authorId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getArchivedPosts = async (authorId: string) => {
  const restPath: string = "/archived";
  try {
    const { data } = await axios({
      method: "get",
      url: postsUrl + restPath,
      data: {
        authorId,
      },
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const favoritePost = async (
  Data: { id: string; userId: string },
  action: FavActionType
) => {
  const restPath: string = "/fav?action=";
  try {
    const { data } = await axios.patch(postsUrl + restPath + action, {
      data: Data,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const getPost = async (Id: string) => {
  const restPath: string = "/";
  try {
    const { data } = await axios.get(postsUrl + restPath + Id);
    return data;
  } catch (error) {
    console.log(error);
  }
};
