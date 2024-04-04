import { Navigate, Route, Routes as RRDRoutes } from "react-router-dom";
import * as Page from "../pages";
import PublicRoutes from "./PublicRoute";
import PrivateRoutes from "./PrivateRoute";

export function Routes() {

  return (
    <RRDRoutes>
      <Route path="/" element={<PublicRoutes />}>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/login" element={<Page.Login />} />
        <Route path="/cadastro" element={<Page.Register />} />
      </Route>
      <Route path="/" element={<PrivateRoutes />}>
        <Route path="/" element={<Navigate replace to="/home" />} />
        <Route path="/home" element={<Page.Home />} />
        <Route path="/about" element={<Page.About />} />
        <Route path="/criar-post" element={<Page.CreatePost />} />
        <Route path="/search" element={<Page.Search/>}/>
        <Route path="/dashboard" element={<Page.Dashboard/>}/>
        <Route path="/post/:id" element={<Page.Post/>}/>
      </Route>
    </RRDRoutes>
  );
}
