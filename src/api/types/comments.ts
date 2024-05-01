export type CreateCommentType = {
  content: string;
  postId: string;
};

export enum LikeCommentActionType {
  TRUE = "true",
  FALSE = "false"
}
