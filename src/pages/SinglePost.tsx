import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/SinglePost.scss";
import pinImg from "@assets/pin.png";
import { useParams } from "react-router-dom";
import { useMutation, useQueries, useQuery } from "@tanstack/react-query";
import { createComment, downLikeComment, getPostComments, upLikeComment } from "@api/comments";
import { favoritePost, getPost, isFavPost } from "@api/posts";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { AppQueryClient } from "../App";
import { decodeJobType } from "@utils";
import { FavActionType } from "@api/types";
import { Comment } from "../types/Prisma";
import { getPostResume } from "@api/files";

export default function SinglePost(): JSX.Element {
  const { id: postId } = useParams<{ id: string }>();
  const [newComment, setNewComment] = useState<string>("");

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

  const post = fetchData[0].data;
  const comments = fetchData[1].data;
  const resume = fetchData[2].data;

  const mutation = useMutation({
    mutationKey: ["new-comment"],
    mutationFn: () => createComment({ postId: postId || "", content: newComment }),
    onSuccess: () => {
      AppQueryClient.invalidateQueries({
        queryKey: ["single-post-comments", postId]
      });
      setNewComment("");
    }
  });

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.length > 0) {
      mutation.mutate();
    }
  };

  const getPinPosition = (output: { x: number; y: number }) => {
    console.log(output);
  };

  return (
    <main id="single-post">
      <PostResume
        src={resume}
        id={postId ?? ""}
        totalFav={post?.data.totalFav || 0}
        pinXnY={getPinPosition}
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
            comments?.data.map(comment => <CommentComponent key={comment.id} data={comment} />)}
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

// COMPONENTS

export function PostResume({
  id,
  totalFav,
  src,
  pinXnY,
  canPin
}: {
  id: string;
  totalFav: number;
  src?: string;
  pinXnY?: (output: { x: number; y: number }) => void;
  canPin: boolean;
}): JSX.Element {
  const [totalFavPost, setTotalFavPost] = useState<number>(0);
  const [pinPosition, setPinPosition] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    setTotalFavPost(totalFav);
  }, [totalFav]);

  useEffect(() => {
    if (!canPin) {
      setPinPosition({ x: 0, y: 0 });
      pinXnY && pinXnY({ x: 0, y: 0 });
    }
  }, [canPin, pinXnY]);

  const { data: isFav } = useQuery({
    queryKey: ["favorite", id],
    queryFn: () => isFavPost(id)
  });

  const onSuccess = (): void => {
    AppQueryClient.invalidateQueries({
      queryKey: ["favorite", id]
    });
    AppQueryClient.invalidateQueries({
      queryKey: ["my-favorites-posts", "1"]
    });
    setTotalFavPost(prev => (isFav?.data ? prev - 1 : prev + 1));
  };

  const favMutation = useMutation({
    mutationFn: () => favoritePost(id, FavActionType.ADD),
    onSuccess
  });
  const favMutationRemove = useMutation({
    mutationFn: () => favoritePost(id, FavActionType.REMOVE),
    onSuccess
  });

  const handleFavorite = () => {
    if (!isFav?.data) {
      favMutation.mutate();
    }
    if (isFav?.data) {
      favMutationRemove.mutate();
    }
  };

  return (
    <div id="single-post-resume">
      <button onClick={handleFavorite}>
        <span>{totalFavPost}</span>
        <AwesomeIcons type={isFav?.data ? "solid" : "regular"} name="bookmark" />
      </button>
      <div className="display">
        <div className="img-container">
          {canPin && (
            <img
              id="pin"
              src={pinImg}
              style={{
                top: pinPosition.y,
                left: pinPosition.x
              }}
              alt="pin"
            />
          )}
          <img
            onClick={e => {
              if (canPin) {
                const rect = imgRef.current?.getBoundingClientRect();
                const x = e.clientX - (rect?.left || 0);
                const y = e.clientY - (rect?.top || 0);
                setPinPosition({ x, y });
                pinXnY && pinXnY({ x, y });
              }
            }}
            ref={imgRef}
            src={src}
            alt="resume"
          />
        </div>
      </div>
    </div>
  );
}

export function PostDescription({
  descData
}: {
  descData: {
    title: string;
    description: string;
    linkedinLink: string;
    githubLink: string;
    otherLink: string;
    jobtype: string;
    level: string;
  };
}): JSX.Element {
  return (
    <div className="desc">
      <h2>{descData.title}</h2>
      <p>{descData.description}</p>
      <div className="types">
        <span>
          <AwesomeIcons type="solid" name="briefcase" /> {decodeJobType(descData.jobtype)}
        </span>
        <span>
          <AwesomeIcons type="solid" name="graduation-cap" />
          {descData.level.toLowerCase()}
        </span>
      </div>
      <div className="links">
        {descData.linkedinLink.length > 5 && (
          <a href={descData.linkedinLink} target="_blank">
            <AwesomeIcons name="linkedin" type="brands" />
            Linkedin
          </a>
        )}
        {descData.githubLink.length > 5 && (
          <a href={descData.githubLink} target="_blank">
            <AwesomeIcons name="github" type="brands" />
            Github
          </a>
        )}
        {descData.otherLink.length > 5 && (
          <a href={descData.otherLink} target="_blank">
            <AwesomeIcons name="link" type="solid" />
            Autre
          </a>
        )}
      </div>
    </div>
  );
}

export function CommentComponent({ data }: { data: Comment }): JSX.Element {
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
    <div className="comment">
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
