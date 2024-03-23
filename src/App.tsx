import { Header } from "@layouts/Header";
import { AboutUs } from "@pages/AboutUs";
import Favorite from "@pages/Favorite";
import Guide from "@pages/Guide";
import Home from "@pages/Home";
import NewPost from "@pages/NewPost";
import NotFound from "@pages/NotFound";
import Posts from "@pages/Posts";
import Profile from "@pages/Profile";
import SinglePost from "@pages/SinglePost";
import MyArchivedPosts from "@pages/sub-pages/MyArchivedPosts";
import MyPosts from "@pages/sub-pages/MyPosts";
import { Toaster } from "react-hot-toast";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Fragment>
        <Header />
        <Outlet />
      </Fragment>
    ),
    children: [
      { path: "", element: <Home /> },
      { path: "posts/:id", element: <SinglePost /> },
      {
        path: "my-posts",
        element: <Posts />,
        children: [
          { path: "", element: <MyPosts /> },
          { path: "archived", element: <MyArchivedPosts /> },
        ],
      },
      { path: "new-post", element: <NewPost /> },
      { path: "favorites", element: <Favorite /> },
      { path: "guide", element: <Guide /> },
      { path: "about-us", element: <AboutUs /> },
      { path: "profile", element: <Profile /> },
    ],
  },
  { path: "*", element: <NotFound /> },
]);

export default function App(): JSX.Element {
  return (
    <Fragment>
      <Toaster position="top-center" gutter={64} />
      <RouterProvider router={router} />
    </Fragment>
  );
}
