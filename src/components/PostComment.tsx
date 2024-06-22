import "./styles/PostComment.scss";
import { useMutation } from "@tanstack/react-query";
import { AppQueryClient } from "../App";
import { downLikeComment, upLikeComment } from "@api/comments";
import { Comment } from "../types/Prisma";
import AwesomeIcons from "./AwesomeIcons";

export function PostComment({
  data
}: {
  data: Comment;
}): JSX.Element {
  const upLikeMutation = useMutation({
    mutationFn: () => upLikeComment(data.id),
    onSuccess: () =>
      AppQueryClient.invalidateQueries({
        queryKey: ["single-post-comments", data.postId]
      })
  });

  const downLikeMutation = useMutation({
    mutationFn: () => downLikeComment(data.id),
    onSuccess: () =>
      AppQueryClient.invalidateQueries({
        queryKey: ["single-post-comments", data.postId]
      })
  });

  const handleUpLike = () => {
    upLikeMutation.mutate();
  };

  const handleDownLike = () => {
    downLikeMutation.mutate();
  };


  return (
    <div
      title="Voir la partie concernée sur le CV"
      className="single-post-comment">
      <p>{data.content}</p>
      <div>
        <button onClick={handleUpLike}>
          <span>{data.totalUpLikes}</span>
          <AwesomeIcons name="thumbs-up" type="regular" />
        </button>
        <button onClick={handleDownLike}>
          <span>{data.totalDownLikes}</span>
          <AwesomeIcons name="thumbs-up fa-flip-vertical" type="regular" />
        </button>
      </div>
    </div>
  );
}
