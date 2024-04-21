import { modalContext } from "@context/store";
import AwesomeIcons from "./AwesomeIcons";
import "./styles/PostsCards.scss";
import { useNavigate } from "react-router-dom";
import TagDate from "./TagDate";

const NewCardTag: JSX.Element = <span className="new">new</span>;
const UnreviewedCardTag: JSX.Element = <span className="unreviewed">unreviewed</span>;

type PostCardProps = {
  id: string;
  title: string;
  description: string;
  bookmarkCount: number;
  date: Date;
};

export function MyPostCard({ id, title, description, bookmarkCount }: PostCardProps): JSX.Element {
  const navigate = useNavigate();
  const { show } = modalContext(state => state);

  return (
    <div className="card">
      <div className="card__tags">
        {NewCardTag}
        {UnreviewedCardTag}
      </div>
      <div className="card__title">
        <p>{title}</p>
      </div>
      <div className="card__description">
        <p>{description}</p>
      </div>
      <div className="card__menu">
        <div className="card__menu-number">
          <span>{bookmarkCount}</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </div>
        <button
          onClick={() => {
            show({ layout: "ARCHIVE", data: {} });
          }}
          className="archive">
          <AwesomeIcons type="regular" name="eye-slash" />
        </button>
        <button
          onClick={() => {
            show({ layout: "EDIT", data: {} });
          }}
          className="edit">
          <AwesomeIcons type="solid" name="pencil" />
        </button>
        <button
          onClick={() => {
            show({ layout: "DELETE", data: {} });
          }}
          className="delete">
          <AwesomeIcons type="solid" name="trash-can" />
        </button>
        <button className="see-more" onClick={() => navigate(`/posts/${id}`)}>
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function ArchivedCard({
  id,
  title,
  description,
  bookmarkCount,
  date
}: PostCardProps): JSX.Element {
  const navigate = useNavigate();
  const { show } = modalContext(state => state);

  return (
    <div className="card">
      <div className="card__tags">{TagDate(date)}</div>
      <div className="card__title">
        <p>{title}</p>
      </div>
      <div className="card__description">
        <p>{description}</p>
      </div>
      <div className="card__menu">
        <div className="card__menu-number">
          <span>{bookmarkCount}</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </div>
        <button
          onClick={() => {
            show({ layout: "UNARCHIVE", data: {} });
          }}
          className="archive">
          <AwesomeIcons type="regular" name="eye" />
        </button>
        <button
          onClick={() => {
            show({ layout: "DELETE", data: {} });
          }}
          className="delete">
          <AwesomeIcons type="solid" name="trash-can" />
        </button>
        <button className="see-more" onClick={() => navigate(`/posts/${id}`)}>
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function PostCard({
  id,
  title,
  description,
  bookmarkCount,
  date
}: PostCardProps): JSX.Element {
  const navigate = useNavigate();
  return (
    <div className="card">
      <div className="card__tags">
        {TagDate(date)}
        {UnreviewedCardTag}
      </div>
      <div className="card__title">
        <h2>{title}</h2>
      </div>
      <div className="card__description">
        <p>{description}</p>
      </div>
      <div className="card__menu">
        <div className="card__menu-number">
          <span>{bookmarkCount}</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </div>
        <button className="see-more" onClick={() => navigate(`/posts/${id}`)}>
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function FavCard({ title, description, bookmarkCount, date }: PostCardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card__tags">
        {TagDate(date)}
        {UnreviewedCardTag}
      </div>
      <div className="card__title">
        <h2>{title}</h2>
      </div>
      <div className="card__description">
        <p>{description}</p>
      </div>
      <div className="card__menu">
        <button className="unfav">
          <span>{bookmarkCount}</span> <AwesomeIcons type="solid" name="bookmark" />
        </button>
      </div>
    </div>
  );
}
