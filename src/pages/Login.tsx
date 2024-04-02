import "./styles/Login.scss";
import logoImg from "@assets/logo.svg";
// import googleLogoImg from "@assets/google-logo.png";

export default function Login() {
  return (
    <main id="login">
      <div id="login__field">
        <img src={logoImg} alt="Critik-V logo" />
        <h2>Se connecter à son compte</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio id
          esse omnis quisquam illum neque nulla placeat excepturi consectetur
          illo exercitationem repellat, itaque nisi. Placeat ex eos
          exercitationem autem quo.
        </p>
        <button>
          {/* <img src={googleLogoImg} alt="google logo" /> */}
          Continue with Google
        </button>
      </div>
    </main>
  );
}
