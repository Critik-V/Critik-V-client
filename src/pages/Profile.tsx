import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Profile.scss";
import { ChangeEvent, FocusEvent, useEffect, useState } from "react";
import { githubRegex, linkedinRegex, otherLinkRegex } from "@utils";
import { getMe } from "@api/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateUser } from "@api/Users";
import { updateUserData } from "@types";

const linkedinPlaceholder = "https://www.linkedin.com/in/username";
const githubPlaceholder = "https://www.github.com/username";
const otherLinkPlaceholder = "https://www.example.com";

export default function Profile(): JSX.Element {
  const [isLinkedinCorrect, setIsLinkedinCorrect] = useState(true);
  const [isGithubCorrect, setIsGithubCorrect] = useState(true);
  const [isOtherLinkCorrect, setIsOtherLinkCorrect] = useState(true);

  const { data: user } = useQuery({
    queryKey: ["user"],
    queryFn: () => getMe(),
    staleTime: 1000 * 60 * 5
  });

  const [linkedinLink, setLinkedinLink] = useState<string>("");
  const [githubLink, setGithubLink] = useState<string>("");
  const [otherLink, setOtherLink] = useState<string>("");

  useEffect(() => {
    if (user) {
      setLinkedinLink(user.linkedinLink || "");
      setGithubLink(user.githubLink || "");
      setOtherLink(user.otherLink || "");
    }
  }, [user]);

  const mutation = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: (data: updateUserData) => updateUser(data)
  });

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: updateUserData = {
      linkedinLink,
      githubLink,
      otherLink,
      language: "fr"
    };

    if (isLinkedinCorrect && isGithubCorrect && isOtherLinkCorrect) {
      mutation.mutate(data);
    }
  };

  return (
    <main id="profile">
      <h1>Votre profil</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="profile-username">Nom & Prénoms</label>
        <input type="text" id="profile-username" defaultValue={user?.fullname} disabled />
        <label htmlFor="profile-linkedin">Linkedin</label>
        <input
          className={isLinkedinCorrect ? "" : "invalid-input"}
          type="text"
          id="profile-linkedin"
          placeholder={linkedinPlaceholder}
          onBlur={(e: FocusEvent<HTMLInputElement>) => {
            setIsLinkedinCorrect(e.currentTarget.value == "" || linkedinRegex.test(e.target.value));
          }}
          value={linkedinLink}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setLinkedinLink(e.target.value);
          }}
        />
        <label htmlFor="profile-github">Github</label>
        <input
          className={isGithubCorrect ? "" : "invalid-input"}
          type="text"
          id="profile-github"
          placeholder={githubPlaceholder}
          onBlur={(e: FocusEvent<HTMLInputElement>) => {
            setIsGithubCorrect(
              e.currentTarget.value == "" || githubRegex.test(e.currentTarget.value)
            );
          }}
          value={githubLink}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setGithubLink(e.target.value);
          }}
        />
        <label htmlFor="profile-other">Autre lien</label>
        <input
          className={isOtherLinkCorrect ? "" : "invalid-input"}
          type="text"
          id="profile-other"
          placeholder={otherLinkPlaceholder}
          onBlur={(e: FocusEvent<HTMLInputElement>) => {
            setIsOtherLinkCorrect(
              e.currentTarget.value == "" || otherLinkRegex.test(e.currentTarget.value)
            );
          }}
          value={otherLink}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setOtherLink(e.target.value);
          }}
        />
        <label htmlFor="profile-language">Langue</label>
        <select defaultValue={user?.language} required id="profile-language">
          <option value="fr">Français 🇫🇷</option>
          <option disabled value="en">
            Anglais 🇬🇧
          </option>
        </select>
        <button type="submit">
          <AwesomeIcons name="pencil" type="solid" /> Mettre à jour
        </button>
      </form>
    </main>
  );
}
