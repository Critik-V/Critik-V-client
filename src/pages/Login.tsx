import "./styles/Login.scss";
import logoImg from "@assets/logo.svg";
import googleLogoImg from "@assets/logo-google.png";

export default function Login() {
  return (
    <main id="login">
      <div id="login__field">
        <img src={logoImg} alt="Critik-V logo" />
        <h2>Se connecter à son compte</h2>
        <p>
          Bienvenue sur Critik-V, une application de review de CV anonyme par
          d'autres utilisateurs. Obtenez des commentaires constructifs pour
          améliorer votre CV.
        </p>
        <button>
          <img src={googleLogoImg} alt="Google logo" />
          Se connecter avec Google
        </button>
      </div>
    </main>
  );
}
