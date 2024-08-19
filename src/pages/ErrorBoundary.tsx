import "./styles/ErrorBoundary.scss";
import notFoundImg from "@assets/not-found.png";
import logo from "@assets/logo.svg";
import { Link } from "react-router-dom";

export default function ErrorBoundary(): JSX.Element {
  return (
    <main id="error-boundary">
      <img src={logo} alt="logo de critik-v" />
      <img src={notFoundImg} alt="Page not found" />
      <p id="error-boundary-title">Une erreur est survenue.</p>
      <p id="error-boundary-message">
        Veuillez réessayer ou contacter le support si le problème persiste.
      </p>
      <Link to="/">
        <button>Page d'accueil</button>
      </Link>
    </main>
  );
}
