import "./styles/Favorite.scss";
import SubHeader from "@layouts/SubHeader";
import SearchBar from "@components/SearchBar";
import { FavCard } from "@components/PostsCards";
export default function Favorite() {
  return (
    <main id="favorite">
      <SubHeader>
        <SearchBar />
      </SubHeader>
      <section id="favorite-posts">
        <FavCard />
      </section>
    </main>
  );
}
