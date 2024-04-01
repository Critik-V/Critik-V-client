import { Fragment } from "react/jsx-runtime";
import "./styles/MyPosts.scss";
import { MyPostCard } from "@components/PostsCards";
import Pagination from "@components/Pagination";

export default function MyPosts(): JSX.Element {
  return (
    <Fragment>
      <section id="my-posts">
        <MyPostCard />
      </section>
      <Pagination />
    </Fragment>
  );
}
