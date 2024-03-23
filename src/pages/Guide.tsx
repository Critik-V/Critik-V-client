import "./styles/Guides.scss";
import illustrationImg from "../assets/strong-box.webp";
import AwesomeIcons from "@components/AwesomeIcons";

export default function Guide(): JSX.Element {
  return (
    <section id="guide">
      <h1>Guide du bon CV</h1>
      <img src={illustrationImg} alt="illustration image" />
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea explicabo
        aspernatur modi ipsum est omnis ducimus. Accusantium quo voluptatibus
        reprehenderit, nam quod ad fugiat, fuga dolorum laboriosam quisquam
        obcaecati molestias!
      </p>
      <button>
        <AwesomeIcons type="solid" name="download" /> Telecharger le PDF{" "}
      </button>
    </section>
  );
}
