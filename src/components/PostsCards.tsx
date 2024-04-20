import { modalContext } from "@context/store";
import AwesomeIcons from "./AwesomeIcons";
import "./styles/PostsCards.scss";

const NewCardTag: JSX.Element = <span className="new">new</span>;
const UnreviewedCardTag: JSX.Element = <span className="unreviewed">unreviewed</span>;

type PostCardProps = {
  title: string;
  description: string;
  bookmarkCount: number;
};

export function MyPostCard({ title, description, bookmarkCount }: PostCardProps): JSX.Element {
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
        <button className="see-more">
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function ArchivedCard({ title, description, bookmarkCount }: PostCardProps): JSX.Element {
  const { show } = modalContext(state => state);

  return (
    <div className="card">
      <div className="card__tags">
        <span>2 jours</span>
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
        <button className="see-more">
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function PostCard({ title, description, bookmarkCount }: PostCardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card__tags">
        {NewCardTag}
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
        <button className="see-more">
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function FavCard({ title, description, bookmarkCount }: PostCardProps): JSX.Element {
  return (
    <div className="card">
      <div className="card__tags">
        {NewCardTag}
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
