import { Route, Routes as RRDRoutes } from "react-router-dom";
import * as Page from "../pages"

function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<Page.Home />}/>
      <Route path="/about" element={<Page.About/>}/>
    </RRDRoutes>
  );
}

export default Routes;
