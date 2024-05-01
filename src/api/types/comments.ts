export type CreateCommentType = {
  content: string;
  postId: string;
};

export type UpdateCommentType = { content: string; authorId: string };

export enum LikeCommentActionType {
  TRUE = "true",
  FALSE = "false"
}
