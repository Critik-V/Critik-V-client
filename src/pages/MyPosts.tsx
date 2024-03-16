import PostsMenu from "@components/PostsMenu";
import "./styles/MyPosts.scss";
import SubHeader from "@layouts/SubHeader";
import { Outlet } from "react-router-dom";

export default function MyPosts() {
  return (
    <main id="Posts">
      <SubHeader>
        <PostsMenu />
      </SubHeader>
      <Outlet />
    </main>
  );
}
