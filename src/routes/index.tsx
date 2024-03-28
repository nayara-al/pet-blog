import { Route, Routes as RRDRoutes } from "react-router-dom";
import * as Page from "../pages";

export function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<Page.Home />} />
      <Route path="/about" element={<Page.About />} />
      <Route path="/criar-post" element={<Page.CreatePost />} />
      <Route path="/login" element={<Page.Login />} />
      <Route path="/cadastro" element={<Page.Register />} />
    </RRDRoutes>
  );
}
