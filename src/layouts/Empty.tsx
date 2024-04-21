import "./styles/Empty.scss";
import emptyImg from "@assets/empty.png";

export default function Empty({
  title = "Ah mince !",
  subtitle = "Aucune donnée trouvée"
}): JSX.Element {
  return (
    <section id="empty">
      <img src={emptyImg} alt="empty reference" />
      <p id="empty-title">{title}</p>
      <p id="empty-message">{subtitle}</p>
    </section>
  );
}
