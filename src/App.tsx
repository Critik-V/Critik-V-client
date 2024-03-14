import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([{ path: "/", element: <div>App</div> }]);

export default function App() {
  return <RouterProvider router={router} />;
}
