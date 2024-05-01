import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/SinglePost.scss";
import resumeExeImg from "@assets/resume.jpg";
import { useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createComment, getPostComments } from "@api/comments";
import { getPost } from "@api/posts";
import { ChangeEvent, useState } from "react";

export default function SinglePost(): JSX.Element {
  const { id: postId } = useParams<{ id: string }>();
  const [newComment, setNewComment] = useState<string>("");

  const { data: comments } = useQuery({
    queryKey: ["single-post", postId],
    queryFn: () => getPostComments(postId || "")
  });

  const { data: post } = useQuery({
    queryKey: ["single-post", postId],
    queryFn: () => getPost(postId || "")
  });

  const mutation = useMutation({
    mutationKey: ["new-comment"],
    mutationFn: () => createComment({ postId: postId || "", content: newComment })
  });

  const onSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (newComment.length > 0) {
      mutation.mutate();
      setNewComment("");
    }
  };

  return (
    <main id="single-post">
      <div id="single-post-resume">
        <button>
          <span>{post?.data.totalFav}</span>
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
            comments?.data.map(comment => <Comment key={comment.id} />)}
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
          <AwesomeIcons type="solid" name="briefcase" /> {descData.jobtype}
        </span>
        <span>
          <AwesomeIcons type="solid" name="graduation-cap" />
          {descData.level}
        </span>
      </div>
      <div className="links">
        {descData.linkedinLink.length > 5 && (
          <a href={descData.linkedinLink}>
            <AwesomeIcons name="linkedin" type="brands" />
            Linkedin
          </a>
        )}
        {descData.githubLink.length > 5 && (
          <a href={descData.githubLink}>
            <AwesomeIcons name="github" type="brands" />
            Github
          </a>
        )}
        {descData.otherLink.length > 5 && (
          <a href={descData.otherLink}>
            <AwesomeIcons name="link" type="solid" />
            Autre
          </a>
        )}
      </div>
    </div>
  );
}

export function Comment(): JSX.Element {
  return (
    <div className="comment">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestiae numquam rerum hic
        facilis dolores necessitatibus iure corporis, ut perferendis exercitationem at animi et
        deleniti a enim officia ipsam quae laudantium. Impedit molestiae totam quam id odit, labore
        rerum pariatur. Nihil reprehenderit, repellat obcaecati labore voluptate nisi illo vitae
        mollitia amet. Numquam nihil reprehenderit adipisci! Fugiat voluptates cupiditate
        reprehenderit ipsum magnam.
      </p>
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
