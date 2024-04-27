import { isAuthenticated } from "@api/auth";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

type ProtectedRouteProps = {
  component: React.ReactNode;
};

export default function ProtectedRoute({ component }: ProtectedRouteProps): JSX.Element {
  const [authStatus, setAuthStatus] = useState<boolean>(true);
  useEffect(() => {
    isAuthenticated().then(data => {
      setAuthStatus(data?.isAuth || false);
    });
  }, []);

  if (authStatus) return <Fragment>{component}</Fragment>;
  return <Navigate to="/login" />;
}
