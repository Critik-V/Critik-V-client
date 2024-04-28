import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Profile.scss";
import { SubmitHandler, useForm } from "react-hook-form";
import { ChangeEvent, FocusEvent, useState } from "react";
import { githubRegex, linkedinRegex, otherLinkRegex } from "@utils";
import { getMe } from "@api/auth";
import { useMutation, useQuery } from "@tanstack/react-query";
import { updateUser } from "@api/Users";
import { User } from "../types/Prisma";

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

  const mutation = useMutation({
    mutationKey: ["update-profile"],
    mutationFn: (data: User) => updateUser(data)
  });

  const { register, handleSubmit } = useForm<User>();
  const onSubmit: SubmitHandler<User> = data => {
    console.log(data);
    mutation.mutate(data);
  };

  return (
    <main id="profile">
      <h1>Vôtre profil</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="profile-name">Nom & prénom</label>
        <input disabled type="text" id="profile-name" defaultValue={user?.fullname} />
        <label htmlFor="profile-linkedin">Linkedin</label>
        <input
          className={isLinkedinCorrect ? "" : "invalid-input"}
          type="text"
          id="profile-linkedin"
          {...register("linkedinLink")}
          onBlur={(e: FocusEvent<HTMLInputElement>) => e.target.value.trim()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setIsLinkedinCorrect(linkedinRegex.test(e.target.value) || e.target.value === "");
          }}
          placeholder={linkedinPlaceholder}
          defaultValue={user?.linkedinLink?.trim()}
        />
        <label htmlFor="profile-github">Github</label>
        <input
          className={isGithubCorrect ? "" : "invalid-input"}
          type="text"
          id="profile-github"
          {...register("githubLink")}
          onBlur={(e: FocusEvent<HTMLInputElement>) => e.target.value.trim()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setIsGithubCorrect(githubRegex.test(e.target.value) || e.target.value === "");
          }}
          placeholder={githubPlaceholder}
          defaultValue={user?.githubLink?.trim()}
        />
        <label htmlFor="profile-other-link">Autre Lien</label>
        <input
          className={isOtherLinkCorrect ? "" : "invalid-input"}
          type="text"
          id="profile-other-link"
          {...register("otherLink")}
          onBlur={(e: FocusEvent<HTMLInputElement>) => e.target.value.trim()}
          onChange={(e: ChangeEvent<HTMLInputElement>) => {
            setIsOtherLinkCorrect(otherLinkRegex.test(e.target.value) || e.target.value === "");
          }}
          placeholder={otherLinkPlaceholder}
          defaultValue={user?.otherLink?.trim()}
        />
        <label htmlFor="profile-ln">
          Langue <span>*</span>
        </label>
        <select {...register("language")} defaultValue={user?.language} required id="profile-ln">
          <option value="fr">Français 🇫🇷</option>
          <option disabled value="en">
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
