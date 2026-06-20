import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import ListeArtisans from "./pages/ListeArtisans";
import FicheArtisan from "./pages/FicheArtisan";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/categorie/:id" element={<ListeArtisans />} />
        <Route path="/artisans/:id" element={<FicheArtisan />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
