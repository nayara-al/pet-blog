import { BrowserRouter } from "react-router-dom";
import * as Component from "./components";
import { Routes } from "./routes";
import { AuthProvider } from "./context/AuthContext";
import { User, onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";
import { useAuthentication } from "./hooks/useAuthentication";

function App() {
  const [user, setUser] = useState<User | null>(null);
  const { auth } = useAuthentication();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  }, [auth]);
 
  return (
    <AuthProvider value={{ user }}>
      <BrowserRouter>
        <Component.Header />
        <Component.StructurePage>
          <Routes />
        </Component.StructurePage>
        <Component.Footer />
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
