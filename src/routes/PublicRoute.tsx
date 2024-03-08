import { Navigate, Outlet } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";

export default function PublicRoutes() {
  const { auth } = useAuthentication();

  const isAuthenticated = (): boolean => {
    const user = auth.currentUser;
    return !!user;
  };

  return isAuthenticated() ? <Navigate to="/home" /> : <Outlet />;
}
