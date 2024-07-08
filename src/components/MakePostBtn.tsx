import "./styles/MakePostBtn.scss";
import { Link } from "react-router-dom";
import AwesomeIcons from "./AwesomeIcons";

export default function MakePostBtn({ title = "Poster son CV" }: { title?: string }): JSX.Element {
  return (
    <Link to="/new-post">
      <button className="make-post-btn">
        <AwesomeIcons type="regular" name="file" />
        {title}
      </button>
    </Link>
  );
}
