import PostsMenu from "@components/PostsMenu";
import "./styles/Posts.scss";
import SubHeader from "@layouts/SubHeader";
import { Outlet } from "react-router-dom";

export default function Posts() {
  return (
    <main id="Posts">
      <SubHeader>
        <PostsMenu />
      </SubHeader>
      <Outlet />
    </main>
  );
}
