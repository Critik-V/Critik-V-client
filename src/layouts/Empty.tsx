import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Empty.scss";
import emptyImg from "@assets/empty.png";
import { Link } from "react-router-dom";

export default function Empty({
  title = "Ah mince !",
  subtitle = "Aucune donnée trouvée",
  btn = true
}): JSX.Element {
  return (
    <section id="empty">
      <img src={emptyImg} alt="empty reference" />
      <p id="empty-title">{title}</p>
      <p id="empty-message">{subtitle}</p>
      {btn && (
        <Link to="/new-post">
          <button className="make-post-btn">
            <AwesomeIcons type="regular" name="file" />
            Poster son CV
          </button>
        </Link>
      )}
    </section>
  );
}
