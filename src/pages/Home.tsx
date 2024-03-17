import AwesomeIcons from "@components/AwesomeIcons";
import "./styles/Home.scss";
import SearchBar from "@components/SearchBar";
import SubHeader from "@layouts/SubHeader";
import { PostCard } from "@components/PostsCards";

export default function Home() {
  return (
    <main id="Home">
      <SubHeader>
        <SearchBar />
        <button id="make-post-btn">
          <AwesomeIcons type="regular" name="file" />
          Poster son CV
        </button>
      </SubHeader>
      <section id="posts">
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
        <PostCard />
      </section>
    </main>
  );
}
