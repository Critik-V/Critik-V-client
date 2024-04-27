import Header from "@layouts/Header";
import AboutUs from "@pages/AboutUs";
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
import Modal from "@modals/Modal";
import { modalContext } from "@context/store";
import Login from "@pages/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ProtectedRoute from "./guard/ProtectedRoute";

export const AppQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true,
      staleTime: 1000 * 60 * 5,
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Fragment>
        {/* <Navigate to="resumes" relative="route" replace={false} /> */}
        <Header />
        <Outlet />
      </Fragment>
    ),
    children: [
      {
        path: "",
        element: <ProtectedRoute component={<Home />} />,
        index: true
      },
      { path: "posts/:id", element: <ProtectedRoute component={<SinglePost />} /> },
      {
        path: "my-posts",
        element: <Posts />,
        children: [
          {
            path: "",
            element: <ProtectedRoute component={<MyPosts />} />
          },
          {
            path: "archived",
            element: <ProtectedRoute component={<MyArchivedPosts />} />
          }
        ]
      },
      { path: "new-post", element: <ProtectedRoute component={<NewPost />} /> },
      {
        path: "favorites",
        element: <ProtectedRoute component={<Favorite />} />
      },
      { path: "guide", element: <ProtectedRoute component={<Guide />} /> },
      { path: "about-us", element: <ProtectedRoute component={<AboutUs />} /> },
      { path: "profile", element: <ProtectedRoute component={<Profile />} /> }
    ]
  },
  { path: "login", element: <Login /> },
  { path: "*", element: <NotFound /> }
]);

export default function App(): JSX.Element {
  const modalVisibilty = modalContext(state => state.visible);

  return (
    <QueryClientProvider client={AppQueryClient}>
      <Toaster position="top-center" gutter={64} />
      {modalVisibilty && <Modal />}
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
