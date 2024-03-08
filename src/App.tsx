import { BrowserRouter } from "react-router-dom";
import * as Component from "./components";
import { Routes } from "./routes";

function App() {
  return (
    <BrowserRouter>
      <Component.Header />
      <Component.StructurePage>
        <Routes />
      </Component.StructurePage>
      <Component.Footer />
    </BrowserRouter>
  );
}

export default App;
