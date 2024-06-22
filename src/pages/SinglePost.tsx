import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/SinglePost.scss";
import { useParams } from "react-router-dom";
import { useMutation, useQueries } from "@tanstack/react-query";
import { createComment, getPostComments } from "@api/comments";
import { getPost } from "@api/posts";
import { ChangeEvent, useState } from "react";
import { AppQueryClient } from "../App";
import { getPostResume } from "@api/files";
import { PostResume } from "@components/PostResume";
import { PostDescription } from "@components/PostDescription";
import { PostComment } from "@components/PostComment";

export default function SinglePost(): JSX.Element {
  const { id: postId } = useParams<{ id: string }>();
  const [newComment, setNewComment] = useState<string>("");
  const [newCommentPosition, setNewCommentPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0
  });
  const [commentPosition, setCommentPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const fetchData = useQueries({
    queries: [
      {
        queryKey: ["single-post", postId],
        queryFn: () => getPost(postId || "")
      },
      {
        queryKey: ["single-post-comments", postId],
        queryFn: () => getPostComments(postId || "")
      },
      {
        queryKey: ["post-resume", postId],
        queryFn: () => getPostResume(postId || "")
      }
    ]
  });

  const getNewCommentPinPosition = (output: { x: number; y: number }) => {
    setNewCommentPosition(output);
  };

  const getCommentPinPosition = (output: { x: number; y: number }) => {
    setCommentPosition(output);
  };

  const post = fetchData[0].data;
  const comments = fetchData[1].data;
  const resume = fetchData[2].data;

  const mutation = useMutation({
    mutationKey: ["new-comment"],
    mutationFn: () =>
      createComment({
        postId: postId || "",
        content: newComment,
        posX: newCommentPosition.x,
        posY: newCommentPosition.y
      }),
    onSuccess: () => {
      AppQueryClient.invalidateQueries({
        queryKey: ["single-post-comments", postId]
      });
      setNewCommentPosition({ x: 0, y: 0 });
      setNewComment("");
    }
  });

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.length > 0) {
      mutation.mutate();
    }
  };

  return (
    <main id="single-post">
      <PostResume
        src={resume}
        id={postId ?? ""}
        totalFav={post?.data.totalFav || 0}
        newCommentPinXnY={getNewCommentPinPosition}
        commentPosition={commentPosition}
        canPin={newComment.length > 0}
      />
      <div id="single-post-other">
        <PostDescription
          descData={{
            title: post?.data.title || "",
            description: post?.data.description || "",
            linkedinLink: post?.data.author.linkedinLink || "",
            githubLink: post?.data.author.githubLink || "",
            otherLink: post?.data.author.otherLink || "",
            jobtype: post?.data.jobType || "",
            level: post?.data.experienceLevel || ""
          }}
        />
        <div className="comments">
          {comments?.data &&
            comments?.data?.length > 0 &&
            comments?.data.map(comment => (
              <PostComment key={comment.id} data={comment} commentPos={getCommentPinPosition} />
            ))}
          {comments?.data.length === 0 && <NoComment />}
          {!comments && <NoData />}
        </div>
        <form onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="faire un commentaire..."
            value={newComment}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setNewComment(e.target.value)}
          />
          <button>
            <AwesomeIcons name="paper-plane" type="solid" />
          </button>
        </form>
      </div>
    </main>
  );
}

// components

export function NoComment(): JSX.Element {
  return (
    <div className="no-comment">
      <AwesomeIcons name="comment-slash" type="solid" />
      <p>Soyez le premier à laisser un commentaire sur ce post.</p>
    </div>
  );
}

export function NoData(): JSX.Element {
  return (
    <div className="no-comment">
      <AwesomeIcons name="exclamation-triangle" type="solid" />
      <p>Aucune donnée n'a été trouvée.</p>
    </div>
  );
}
