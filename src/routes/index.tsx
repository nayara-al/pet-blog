import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";
import * as Page from "../pages";
import { useAuthContext } from "../context/useAuthContext";

export function Routes() {
  const { user } = useAuthContext();
  return (
    <RRDRoutes>
      <Route
        path="/"
        element={user ? <Page.Home /> : <Navigate replace to="/login" />}
      />
      <Route
        path="/about"
        element={user ? <Page.About /> : <Navigate replace to="/login" />}
      />
      <Route
        path="/criar-post"
        element={user ? <Page.CreatePost /> : <Navigate replace to="/login" />}
      />

      <Route
        path="/login"
        element={!user ? <Page.Login /> : <Navigate replace to="/" />}
      />
      <Route
        path="/cadastro"
        element={!user ? <Page.Register /> : <Navigate replace to="/" />}
      />
    </RRDRoutes>
  );
}
