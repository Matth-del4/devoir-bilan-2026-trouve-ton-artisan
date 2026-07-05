import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useSearchParams } from "react-router-dom";
import CardArtisan from "../components/CardArtisan";

function Recherche() {
  const [searchParams] = useSearchParams();
  const [artisans, setArtisans] = useState([]);
  const searchQuery = searchParams.get("search");
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_API_URL}/api/artisans/search?search=${searchQuery}`,
        {
          headers: {
            "x-api-key": import.meta.env.VITE_API_KEY,
          },
        },
      )
      .then((response) => {
        setArtisans(response.data);
      });
  }, [searchQuery]);

  return (
    <div>
      <Header />
      <main>
        <h2>Résultats de recherche pour "{searchQuery}"</h2>
        <ul>
          {/* Affichage des artisans trouvés */}
          {artisans.map((artisan) => (
            <CardArtisan
              key={artisan.id}
              id={artisan.id}
              nom={artisan.nom}
              note={artisan.note}
              ville={artisan.ville}
              specialite={artisan.Specialite?.metier}
            />
          ))}
        </ul>
      </main>
      <Footer />
    </div>
  );
}

export default Recherche;
