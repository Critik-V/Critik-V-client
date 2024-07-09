import "./styles/PostComment.scss";
import { useMutation } from "@tanstack/react-query";
import { AppQueryClient } from "../App";
import { downLikeComment, upLikeComment } from "@api/comments";
import { Comment } from "../types/Prisma";
import AwesomeIcons from "./AwesomeIcons";
import timeAgo from "../utils/timeAgo";

export function PostComment({ data, userId }: { data: Comment; userId: string }): JSX.Element {
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
    <div className="single-post-comment">
      <div className="header">
        {data.authorId === userId ? (
          <p className="tag-two">Auteur</p>
        ) : (
          <p className="tag-one">Anonyme</p>
        )}

        <p>{timeAgo(data.createdAt)}</p>
      </div>
      <p>{data.content}</p>
      <div className="body">
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
