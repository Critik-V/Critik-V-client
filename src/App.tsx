import { Header } from "@layouts/Header";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Fragment>
        <Header />
      </Fragment>
    ),
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
