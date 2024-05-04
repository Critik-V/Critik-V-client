import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/SinglePost.scss";
import resumeExeImg from "@assets/resume.jpg";
import { useParams } from "react-router-dom";
import { useMutation, useQueries } from "@tanstack/react-query";
import { createComment, getPostComments } from "@api/comments";
import { getPost } from "@api/posts";
import { ChangeEvent, useState } from "react";
import { AppQueryClient } from "../App";
import { decodeJobType } from "@utils";

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
      }
    ]
  });

  const post = fetchData[0].data;
  const comments = fetchData[1].data;

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

  return (
    <main id="single-post">
      <div id="single-post-resume">
        <button>
          <span>{post?.data?.totalFav}</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </button>
        <div className="display">
          <img src={resumeExeImg} alt="resume example" />
        </div>
      </div>
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
            comments?.data.map(comment => <Comment key={comment.id} content={comment.content} />)}
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

export function Comment({ content }: { content: string }): JSX.Element {
  return (
    <div className="comment">
      <p>{content}</p>
      <div>
        <button>
          <span>12</span>
          <AwesomeIcons name="thumbs-up" type="regular" />
        </button>
        <button>
          <span>0</span>
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
