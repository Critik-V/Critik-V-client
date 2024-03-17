import { Header } from "@layouts/Header";
import Favorite from "@pages/Favorite";
import Home from "@pages/Home";
import Posts from "@pages/Posts";
import MyArchivedPosts from "@pages/sub-pages/MyArchivedPosts";
import MyPosts from "@pages/sub-pages/MyPosts";

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
      {
        path: "my-posts",
        element: <Posts />,
        children: [
          { path: "", element: <MyPosts /> },
          { path: "archived", element: <MyArchivedPosts /> },
        ],
      },
      { path: "favorites", element: <Favorite /> },
      { path: "guide", element: <div>CV Guide</div> },
      { path: "about-us", element: <div>About Us</div> },
      { path: "profile", element: <div>Profile</div> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
