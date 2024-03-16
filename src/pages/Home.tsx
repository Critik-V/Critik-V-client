import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Home.scss";
import SearchBar from "@components/SearchBar";
import SubHeader from "@layouts/SubHeader";

export default function Home() {
  return (
    <main id="Home">
      <SubHeader>
        <SearchBar />
        <button>
          <AwesomeIcons type="regular" name="file" />
          Poster son CV
        </button>
      </SubHeader>
    </main>
  );
}
