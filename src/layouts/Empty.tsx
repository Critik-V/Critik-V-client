import "./styles/Empty.scss";
import emptyImg from "@assets/empty.png";

export default function Empty() {
  return (
    <main id="empty">
      <img src={emptyImg} alt="empty reference" />
      <p id="empty-title">Oops !</p>
      <p id="empty-message">Aucune donnée trouvée</p>
    </main>
  );
}
