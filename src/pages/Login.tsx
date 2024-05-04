import "./styles/Login.scss";
import logoImg from "@assets/logo.svg";
import loginIllustrationImg from "@assets/login-illustration.png";
import googleLogoImg from "@assets/logo-google.png";
import { login } from "@api/index";

export default function Login(): JSX.Element {
  const handleLogin = async () => {
    login();
  };

  return (
    <main id="login">
      <section className="logo">
        <img src={logoImg} alt="logo" />
      </section>
      <section className="container">
        <div className="left">
          <img src={loginIllustrationImg} alt="login illustration" />
        </div>
        <div className="right">
          <h1>
            Laissez votre CV se faire critiquer, ouvrez la porte à de nouvelles opportunités !
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque vero voluptatum
            beatae nobis neque doloribus veritatis debitis eius inventore magni aut vel corporis
            quidem voluptatem adipisci, error eligendi assumenda dolor?
          </p>
          <button onClick={handleLogin}>
            <img src={googleLogoImg} alt="Google logo" />
            Se connecter avec Google
          </button>
        </div>
      </section>
    </main>
  );
}
