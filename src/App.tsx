import { BrowserRouter, Route, Routes } from "react-router-dom";
import * as Component from "./components";
import { Home, About, Login, Register } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Component.Header />
      <Component.StructurePage>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
        </Routes>
      </Component.StructurePage>
      <Component.Footer />
    </BrowserRouter>
  );
}

export default App;
