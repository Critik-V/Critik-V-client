import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Profile.scss";

const linkedinPlaceholder = "https://www.linkedin.com/in/username";
const githubPlaceholder = "https://www.github.com/username";
const otherLinkPlaceholder = "https://www.example.com";


export default function Profile(): JSX.Element {
  return (
    <main id="profile">
      <h1>Vôtre profil</h1>
      <form>
        <label htmlFor="profile-name">Nom & prénom</label>
        <input disabled type="text" name="" id="" value={"user name"} />
        <label htmlFor="profile-description">Description</label>
        <textarea
          placeholder="Decrivez-vous en quelques mots..."
          name="profile-description"
          id="profile-description"
          cols={30}
          rows={3}
          maxLength={50}></textarea>
        <label htmlFor="profile-linkedin">Linkedin</label>
        <input
          type="text"
          name="profile-linkedin"
          id="profile-linkedin"
          placeholder={linkedinPlaceholder}
        />
        <label htmlFor="profile-github">Github</label>
        <input
          type="text"
          name="profile-github"
          id="profile-github"
          placeholder={githubPlaceholder}
        />
        <label htmlFor="profile-other-link">Autre Lien</label>
        <input
          type="text"
          name="profile-other-link"
          id="profile-other-link"
          placeholder={otherLinkPlaceholder}
        />
        <label htmlFor="profile-ln">
          Langue <span>*</span>
        </label>
        <select name="profile-ln" id="profile-ln">
          <option selected value="FR">
            Français 🇫🇷
          </option>
          <option disabled value="EN">
            Anglais 🇬🇧
          </option>
        </select>
        <button type="submit">
          <AwesomeIcons name="pencil" type="solid" /> Modifier
        </button>
      </form>
    </main>
  );
}
