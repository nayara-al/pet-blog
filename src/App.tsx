import { BrowserRouter } from "react-router-dom";
import Routes from "./routes";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import StructurePage from "./components/StructurePage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <StructurePage>
        <Routes />
      </StructurePage>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
