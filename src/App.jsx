import React from "react";
import { Route, Routes } from "react-router-dom";
import Acceuil from "./pages/Acceuil/Acceuil";
import MonCompt from "./pages/compt/MonCompt";
import Connexion from "./pages/connexion/Connexion";
import Inscription from "./pages/inscription/Inscription";
import Header from "./componentes/header/Header";
import { UserProvider } from "./useContext/useContextConnection"; 
import PagePersonnelle from "./pages/pagePersonnelle/PagePersonnelle";

function App() {
  return (
    <UserProvider>
      {" "}
      {/* Utilisation correcte de UserProvider */}
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Acceuil />} />
            <Route path="/Connexion" element={<Connexion />} />
            <Route path="/Inscription" element={<Inscription />} />
            <Route path="/MonCompte" element={<MonCompt />} />
            <Route path="/PagePersonnelle" element={<PagePersonnelle />} />
          </Routes>
        </div>
      </div>
    </UserProvider>
  );
}

export default App;
