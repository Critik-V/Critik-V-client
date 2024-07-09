import { Toaster } from "react-hot-toast";

import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";
import Modal from "@modals/Modal";
import { modalContext } from "@context/store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy, Suspense } from "react";

const Header = lazy(() => import("@layouts/Header"));
const Home = lazy(() => import("@pages/Home"));
const SinglePost = lazy(() => import("@pages/SinglePost"));
const Posts = lazy(() => import("@pages/Posts"));
const MyPosts = lazy(() => import("@pages/sub-pages/MyPosts"));
const MyArchivedPosts = lazy(() => import("@pages/sub-pages/MyArchivedPosts"));
const NewPost = lazy(() => import("@pages/NewPost"));
const Favorite = lazy(() => import("@pages/Favorite"));
const Guide = lazy(() => import("@pages/Guide"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
const Profile = lazy(() => import("@pages/Profile"));
const Login = lazy(() => import("@pages/Login"));
const NotFound = lazy(() => import("@pages/NotFound"));
const Spinner = lazy(() => import("@layouts/Spinner"));

const ProtectedRoute = lazy(() => import("./guard/ProtectedRoute"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Spinner />}>
        <Fragment>
          <Header />
          <Outlet />
        </Fragment>
      </Suspense>
    ),
    children: [
      {
        path: "",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProtectedRoute component={<Home />} />
          </Suspense>
        ),
        index: true
      },
      {
        path: "posts/:id",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProtectedRoute component={<SinglePost />} />
          </Suspense>
        )
      },
      {
        path: "my-posts",
        element: (
          <Suspense fallback={<Spinner />}>
            <Posts />
          </Suspense>
        ),
        children: [
          {
            path: "",
            element: (
              <Suspense fallback={<Spinner />}>
                <ProtectedRoute component={<MyPosts />} />
              </Suspense>
            )
          },
          {
            path: "archived",
            element: (
              <Suspense fallback={<Spinner />}>
                <ProtectedRoute component={<MyArchivedPosts />} />
              </Suspense>
            )
          }
        ]
      },
      {
        path: "new-post",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProtectedRoute component={<NewPost />} />
          </Suspense>
        )
      },
      {
        path: "favorites",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProtectedRoute component={<Favorite />} />
          </Suspense>
        )
      },
      {
        path: "guide",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProtectedRoute component={<Guide />} />
          </Suspense>
        )
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProtectedRoute component={<AboutUs />} />
          </Suspense>
        )
      },
      {
        path: "profile",
        element: (
          <Suspense fallback={<Spinner />}>
            <ProtectedRoute component={<Profile />} />
          </Suspense>
        )
      }
    ]
  },
  {
    path: "login",
    element: (
      <Suspense fallback={<Spinner />}>
        <Login />
      </Suspense>
    )
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Spinner />}>
        <NotFound />
      </Suspense>
    )
  }
]);

export const AppQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: true
    }
  }
});

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
