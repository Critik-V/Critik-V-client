import AwesomeIcons from "./AwesomeIcons";
import "./styles/PostsCards.scss";

const NewCardTag: JSX.Element = <span className="new">new</span>;
const UnreviewedCardTag: JSX.Element = (
  <span className="unreviewed">unreviewed</span>
);

export function MyPostCard() {
  return (
    <div className="card">
      <div className="card__tags">
        {NewCardTag}
        {UnreviewedCardTag}
      </div>
      <div className="card__title">
        <p>
          Titre du post qui est un peu long et qui va être coupé à un moment
        </p>
      </div>
      <div className="card__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione
          ullam adipisci perspiciatis, eveniet optio, magnam sint laudantium
          repellendus porro, commodi nisi ea illum voluptatum quasi? Atque iure
          vero cumque. Ipsum dolores officia animi et hic laudantium quas dolor,
          blanditiis quo expedita, quibusdam quia quam facere aliquam
          praesentium eius id perferendis, nesciunt provident porro commodi
          saepe magni! Quas, ab et!
        </p>
      </div>
      <div className="card__menu">
        <div className="card__menu-number">
          <span>12</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </div>
        <button className="archive">
          <AwesomeIcons type="regular" name="eye-slash" />
        </button>
        <button className="edit">
          <AwesomeIcons type="solid" name="pencil" />
        </button>
        <button className="delete">
          <AwesomeIcons type="solid" name="trash-can" />
        </button>
        <button className="see-more">
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function ArchivedCard() {
  return (
    <div className="card">
      <div className="card__tags">
        <span>2 jours</span>
      </div>
      <div className="card__title">
        <p>
          Titre du post qui est un peu long et qui va être coupé à un moment
        </p>
      </div>
      <div className="card__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione
          ullam adipisci perspiciatis, eveniet optio, magnam sint laudantium
          repellendus porro, commodi nisi ea illum voluptatum quasi? Atque iure
          vero cumque. Ipsum dolores officia animi et hic laudantium quas dolor,
          blanditiis quo expedita, quibusdam quia quam facere aliquam
          praesentium eius id perferendis, nesciunt provident porro commodi
          saepe magni! Quas, ab et!
        </p>
      </div>
      <div className="card__menu">
        <div className="card__menu-number">
          <span>12</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </div>
        <button className="archive">
          <AwesomeIcons type="regular" name="eye" />
        </button>
        <button className="delete">
          <AwesomeIcons type="solid" name="trash-can" />
        </button>
        <button className="see-more">
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function PostCard() {
  return (
    <div className="card">
      <div className="card__tags">
        {NewCardTag}
        {UnreviewedCardTag}
      </div>
      <div className="card__title">
        <h2>
          Titre du post qui est un peu long et qui va être coupé à un moment
        </h2>
      </div>
      <div className="card__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione
          ullam adipisci perspiciatis, eveniet optio, magnam sint laudantium
          repellendus porro, commodi nisi ea illum voluptatum quasi? Atque iure
          vero cumque. Ipsum dolores officia animi et hic laudantium quas dolor,
          blanditiis quo expedita, quibusdam quia quam facere aliquam
          praesentium eius id perferendis, nesciunt provident porro commodi
          saepe magni! Quas, ab et!
        </p>
      </div>
      <div className="card__menu">
        <div className="card__menu-number">
          <span>12</span>
          <AwesomeIcons type="regular" name="bookmark" />
        </div>
        <button className="see-more">
          Voir plus <AwesomeIcons type="solid" name="arrow-right" />
        </button>
      </div>
    </div>
  );
}

export function FavCard() {
  return (
    <div className="card">
      <div className="card__tags">
        {NewCardTag}
        {UnreviewedCardTag}
      </div>
      <div className="card__title">
        <h2>
          Titre du post qui est un peu long et qui va être coupé à un moment
        </h2>
      </div>
      <div className="card__description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ratione
          ullam adipisci perspiciatis, eveniet optio, magnam sint laudantium
          repellendus porro, commodi nisi ea illum voluptatum quasi? Atque iure
          vero cumque. Ipsum dolores officia animi et hic laudantium quas dolor,
          blanditiis quo expedita, quibusdam quia quam facere aliquam
          praesentium eius id perferendis, nesciunt provident porro commodi
          saepe magni! Quas, ab et!
        </p>
      </div>
      <div className="card__menu">
        <button className="unfav">
          <span>18</span> <AwesomeIcons type="solid" name="bookmark" />
        </button>
      </div>
    </div>
  );
}
