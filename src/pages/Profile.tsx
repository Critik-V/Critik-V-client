import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Profile.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { ProfilInputType } from "@types";
import { useState } from "react";
import { githubRegex, linkedinRegex, otherLinkRegex } from "@utils";

const linkedinPlaceholder = "https://www.linkedin.com/in/username";
const githubPlaceholder = "https://www.github.com/username";
const otherLinkPlaceholder = "https://www.example.com";

export default function Profile(): JSX.Element {
  const [isLinkedinCorrect, setIsLinkedinCorrect] = useState(true);
  const [isGithubCorrect, setIsGithubCorrect] = useState(true);
  const [isOtherLinkCorrect, setIsOtherLinkCorrect] = useState(true);

  const { register, handleSubmit } = useForm<ProfilInputType>();
  const onSubmit: SubmitHandler<ProfilInputType> = (data) => {
    console.log(data);
  };

  return (
    <main id="profile">
      <h1>Vôtre profil</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="profile-name">Nom & prénom</label>
        <input
          required
          disabled
          type="text"
          name=""
          id=""
          value={"user name"}
        />
        <label htmlFor="profile-description">Description</label>
        <textarea
          {...register("description", {
            onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
              e.target.value.trim(),
          })}
          placeholder="Decrivez-vous en quelques mots..."
          id="profile-description"
          cols={30}
          rows={3}
          maxLength={50}></textarea>
        <label htmlFor="profile-linkedin">Linkedin</label>
        <input
          className={isLinkedinCorrect ? "" : "invalid-input"}
          {...(register("linkedin"),
          {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setIsLinkedinCorrect(
                linkedinRegex.test(e.target.value) || e.target.value === ""
              );
            },
            onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
              e.target.value.trim(),
          })}
          type="text"
          id="profile-linkedin"
          placeholder={linkedinPlaceholder}
        />
        <label htmlFor="profile-github">Github</label>
        <input
          className={isGithubCorrect ? "" : "invalid-input"}
          {...(register("github"),
          {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setIsGithubCorrect(
                githubRegex.test(e.target.value) || e.target.value === ""
              );
            },
            onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
              e.target.value.trim(),
          })}
          type="text"
          id="profile-github"
          placeholder={githubPlaceholder}
        />
        <label htmlFor="profile-other-link">Autre Lien</label>
        <input
          className={isOtherLinkCorrect ? "" : "invalid-input"}
          {...(register("otherLink"),
          {
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
              setIsOtherLinkCorrect(
                otherLinkRegex.test(e.target.value) || e.target.value === ""
              );
            },
            onBlur: (e: React.FocusEvent<HTMLInputElement>) =>
              e.target.value.trim(),
          })}
          type="text"
          id="profile-other-link"
          placeholder={otherLinkPlaceholder}
        />
        <label htmlFor="profile-ln">
          Langue <span>*</span>
        </label>
        <select {...register("ln")} defaultValue="FR" required id="profile-ln">
          <option value="FR">Français 🇫🇷</option>
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
