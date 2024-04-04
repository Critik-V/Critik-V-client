export type CreateCommentType = {
  content: string;
  postId: string;
  authorId: string;
};

export type UpdateCommentType = { content: string; authorId: string };

export enum LikeCommentActionType {
  TRUE = "true",
  FALSE = "false",
}
