import "./styles/Failed.scss";
import errImg from "@assets/failed.png";

export default function Failed({
  title = "Oops !",
  subtitle = "Echec de chargement des données"
}): JSX.Element {
  return (
    <section id="failed">
      <img src={errImg} alt="error reference" />
      <p id="failed-title">{title}</p>
      <p id="failed-message">{subtitle}</p>
    </section>
  );
}
