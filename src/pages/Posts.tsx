import PostsMenu from "@components/PostsMenu";
import SubHeader from "@layouts/SubHeader";
import { Outlet } from "react-router-dom";

export default function Posts(): JSX.Element {
  return (
    <main id="Posts">
      <SubHeader>
        <PostsMenu />
      </SubHeader>
      <Outlet />
    </main>
  );
}
