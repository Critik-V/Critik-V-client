import { Fragment } from "react/jsx-runtime";
import "./styles/MyPosts.scss";
import { MyPostCard } from "@components/PostsCards";

export default function MyPosts(): JSX.Element {
  return (
    <Fragment>
      <section id="my-posts">
        <MyPostCard />
      </section>
    </Fragment>
  );
}
