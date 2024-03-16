import { Header } from "@layouts/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Fragment>
        <Header />
        <main>
          <Outlet />
        </main>
      </Fragment>
    ),
    children: [
      { path: "my-posts", element: <div>My Posts</div> },
      { path: "favorites", element: <div>Favorites</div> },
      { path: "guide", element: <div>CV Guide</div> },
      { path: "about-us", element: <div>About Us</div> },
      { path: "profile", element: <div>Profile</div> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
