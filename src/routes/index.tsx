import { Route, Routes as RRDRoutes } from "react-router-dom";

function Routes() {
  return (
    <RRDRoutes>
      <Route path="/" element={<div></div>}></Route>
    </RRDRoutes>
  );
}

export default Routes;
