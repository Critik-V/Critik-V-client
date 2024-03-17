import { FC } from "react";
import "./styles/AboutUs.scss";
import AwesomeIcons from "@components/AwesomeIcons";
import logoImg from "@assets/logo.svg";

export const AboutUs: FC = () => {
  return (
    <section id="about-us">
      <h1>À propos de nous</h1>
      <p>
        Critik-V est une nouvelle plateforme pour améliorer votre CV et
        augmenter vos chances de trouver le job idéal. Ce qui la rend spéciale,
        c'est que les critiques proviennent d'autres membres de la plateforme,
        tous restant anonymes. Des professionnels du recrutement, des experts en
        ressources humaines et d'autres membres de la communauté fournissent des
        critiques objectives tout en préservant la confidentialité. Cela
        garantit des évaluations justes, sans partialité. Vous recevrez des
        conseils personnalisés pour améliorer la présentation de vos compétences
        et de votre expérience. Cette approche collaborative vous permet
        d'améliorer votre CV de manière confidentielle, tout en bénéficiant de
        différentes perspectives. En plus des retours sur votre CV, la
        plateforme propose des conseils sur les tendances du marché de l'emploi,
        des suggestions pour adapter votre CV à des industries spécifiques et
        des astuces pour réussir les entretiens. Optez pour notre service
        d'évaluation de CV basé sur l'anonymat et la diversité des avis pour
        maximiser vos opportunités professionnelles.
      </p>
      <h2>Rejoins nous !</h2>
      <p>
        Nous sommes à la recherche de contributeurs GitHub pour notre projet
        open-source ! Si vous êtes un UX/UI Designer, Développeur Frontend,
        Backend, DevOps, Rédacteur Web, Spécialiste de la Sécurité Informatique,
        Expert en Intelligence Artificielle, Spécialiste des Bases de Données ou
        Architecte Logiciel, votre expertise est inestimable pour notre
        communauté. Venez nous rejoindre pour participer à la construction d'une
        plateforme plus solide, afin d'aider les autres à améliorer leur CV.
      </p>
      <div className="links">
        <a target="_blank" href={import.meta.env.VITE_GITHUB_LINK}>
          <AwesomeIcons type="brands" name="github" /> Github
        </a>
        <a target="_blank" href={import.meta.env.VITE_DISCORD_LINK}>
          <AwesomeIcons type="brands" name="discord" /> Discord
        </a>
      </div>
      <div className="logo">
        <img src={logoImg} alt="logo critik-v" />
      </div>
    </section>
  );
};
