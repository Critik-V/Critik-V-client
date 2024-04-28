import { modalContext } from "@context/store";
import AwesomeIcons from "./AwesomeIcons";
import "./styles/PostsCards.scss";
import { useNavigate } from "react-router-dom";
import { Post } from "../types/Prisma";
import { TagDate, UnreviewedCardTag } from "./TagDate";

type PostCardProps = {
  data: Post;
};

export function MyPostCard({ data }: PostCardProps): JSX.Element {
  const navigate = useNavigate();
  const { show } = modalContext(state => state);

  return (
    <div className="card">
      <div className="card__tags">
        {TagDate(data.createdAt)}
        {UnreviewedCardTag(data.comments)}
      </div>
      <div className="card__title">
        <h2>{data.title}</h2>
      </div>
      <div className="card__description">
        <p>{data.description}</p>
      </div>
      <div className="card__menu">
        <div className="card__menu-number">
          <span>{data.totalFav}</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </div>
        <button
          onClick={() => {
            show({ layout: "ARCHIVE", data });
          }}
          className="archive">
          <AwesomeIcons type="regular" name="eye-slash" />
        </button>
        <button
          onClick={() => {
            show({ layout: "EDIT", data });
          }}
          className="edit">
          <AwesomeIcons type="solid" name="pencil" />
        </button>
        <button
          onClick={() => {
            show({ layout: "DELETE", data });
          }}
          className="delete">
          <AwesomeIcons type="solid" name="trash-can" />
        </button>
        <button className="see-more" onClick={() => navigate(`/posts/${data.id}`)}>
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function ArchivedCard({ data }: PostCardProps): JSX.Element {
  const navigate = useNavigate();
  const { show } = modalContext(state => state);

  return (
    <div className="card">
      <div className="card__tags">{TagDate(data.createdAt)}</div>
      <div className="card__title">
        <h2>{data.title}</h2>
      </div>
      <div className="card__description">
        <p>{data.description}</p>
      </div>
      <div className="card__menu">
        <div className="card__menu-number">
          <span>{data.totalFav}</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </div>
        <button
          onClick={() => {
            show({ layout: "UNARCHIVE", data });
          }}
          className="archive">
          <AwesomeIcons type="regular" name="eye" />
        </button>
        <button
          onClick={() => {
            show({ layout: "DELETE", data });
          }}
          className="delete">
          <AwesomeIcons type="solid" name="trash-can" />
        </button>
        <button className="see-more" onClick={() => navigate(`/posts/${data.id}`)}>
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function PostCard({ data }: PostCardProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card__tags">
        {TagDate(data.createdAt)}
        {UnreviewedCardTag(data.comments)}
      </div>
      <div className="card__title">
        <h2>{data.title}</h2>
      </div>
      <div className="card__description">
        <p>{data.description}</p>
      </div>
      <div className="card__menu">
        <div className="card__menu-number">
          <span>{data.totalFav}</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </div>
        <button className="see-more" onClick={() => navigate(`/posts/${data.id}`)}>
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function FavCard({ data }: PostCardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card__tags">
        {TagDate(data.createdAt)}
        {UnreviewedCardTag(data.comments)}
      </div>
      <div className="card__title">
        <h2>{data.title}</h2>
      </div>
      <div className="card__description">
        <p>{data.description}</p>
      </div>
      <div className="card__menu">
        <button className="unfav">
          <span>{data.totalFav}</span> <AwesomeIcons type="solid" name="bookmark" />
        </button>
      </div>
    </div>
  );
}
