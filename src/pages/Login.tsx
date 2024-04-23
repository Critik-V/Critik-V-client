import "./styles/Login.scss";
import logoImg from "@assets/logo.svg";
import googleLogoImg from "@assets/logo-google.png";
import { useNavigate } from "react-router-dom";
import { login } from "@api/index";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    await login().then(data => {
      if (data?.status === 200) {
        navigate("/?page=1");
      }
    });
  };

  return (
    <main id="login">
      <div id="login__field">
        <img src={logoImg} alt="Critik-V logo" />
        <h2>Se connecter à son compte</h2>
        <p>
          Bienvenue sur Critik-V, une application de review de CV anonyme par d'autres utilisateurs.
          Obtenez des commentaires constructifs pour améliorer votre CV.
        </p>
        <button onClick={handleLogin}>
          <img src={googleLogoImg} alt="Google logo" />
          Se connecter avec Google
        </button>
      </div>
    </main>
  );
}
