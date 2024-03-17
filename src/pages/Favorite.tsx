import "./styles/Favorite.scss";
import SubHeader from "@layouts/SubHeader";
import SearchBar from "@components/SearchBar";
import { FavCard } from "@components/PostsCards";
import { Fragment } from "react/jsx-runtime";
import Empty from "@layouts/Empty";

const show: boolean = false;

export default function Favorite(): JSX.Element {
  return (
    <Fragment>
      {show && (
        <main id="favorite">
          <SubHeader>
            <SearchBar />
          </SubHeader>
          <section id="favorite-posts">
            <FavCard />
          </section>
        </main>
      )}
      {!show && <Empty />}
    </Fragment>
  );
}
