import { Navigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

type ProtectedRouteProps = {
  component: React.ReactNode;
};

const isAuthenticated = true;

export default function ProtectedRoute({ component }: ProtectedRouteProps): JSX.Element {
  if (isAuthenticated) return <Fragment>{component}</Fragment>;
  return <Navigate to="/login" />;
}
