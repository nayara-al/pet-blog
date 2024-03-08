import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";
import * as Page from "../pages";
import { PrivateRoutes } from "./PrivateRoute";
import PublicRoutes from "./PublicRoute";

export function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Page.Home />} />
        <Route path="/about" element={<Page.About />} />
        <Route path="/criar-post" element={<Page.CreatePost />} />
      </Route>
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Page.Login />} />
        <Route path="/cadastro" element={<Page.Register />} />
      </Route>
    </RRDRoutes>
  );
}
