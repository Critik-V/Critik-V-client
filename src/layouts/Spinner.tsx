import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Spinner.scss";

export default function Spinner() {
  return (
    <main id="spinner">
      <AwesomeIcons type="solid" name="spinner" animation="spin" />
    </main>
  );
}
