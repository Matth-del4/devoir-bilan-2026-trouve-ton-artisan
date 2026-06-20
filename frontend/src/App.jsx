import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./pages/Accueil";
import ListeArtisans from "./pages/ListeArtisans";
import FicheArtisan from "./pages/FicheArtisan";
import NotFound from "./pages/NotFound";
import PageLegale from "./pages/PageLegale";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/categorie/:id" element={<ListeArtisans />} />
        <Route path="/artisans/:id" element={<FicheArtisan />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/mentions-legales" element={<PageLegale />} />
        <Route path="/donnees-personnelles" element={<PageLegale />} />
        <Route path="/accessibilite" element={<PageLegale />} />
        <Route path="/cookies" element={<PageLegale />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
