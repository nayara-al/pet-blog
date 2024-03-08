import { Navigate, Outlet } from "react-router-dom";
import { useAuthentication } from "../hooks/useAuthentication";

export function PrivateRoutes() {
    const { auth } = useAuthentication();
  
    const isAuthenticated = (): boolean => {
      const user = auth.currentUser;
      return !!user;
    };
  
    return isAuthenticated() ? (
      <Outlet />
    ) : (
      <Navigate to="/login" replace />
    );
  }