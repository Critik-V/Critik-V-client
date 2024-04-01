import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Home.scss";
import { SearchBar } from "@components/SearchBars";
import SubHeader from "@layouts/SubHeader";
import { PostCard } from "@components/PostsCards";
import { Link } from "react-router-dom";
import Pagination from "@components/Pagination";

export default function Home(): JSX.Element {
  return (
    <main id="Home">
      <SubHeader>
        <SearchBar />
        <Link to="/new-post">
          <button id="make-post-btn">
            <AwesomeIcons type="regular" name="file" />
            Poster son CV
          </button>
        </Link>
      </SubHeader>
      <section id="all-posts">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
      <Pagination />
    </main>
  );
}
