import { Fragment } from "react/jsx-runtime";
import "./styles/MyArchivedPosts.scss";
import { ArchivedCard } from "@components/PostsCards";
import Pagination from "@components/Pagination";

export default function MyArchivedPosts(): JSX.Element {
  return (
    <Fragment>
      <section id="my-archived-posts">
        <ArchivedCard />
      </section>
      <Pagination />
    </Fragment>
  );
}
