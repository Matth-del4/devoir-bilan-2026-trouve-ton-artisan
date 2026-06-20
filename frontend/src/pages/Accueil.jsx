import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CardArtisan from "../components/CardArtisan";

function Accueil() {
  const [artisans, setArtisans] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/artisans/top", {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        setArtisans(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'artisan :", error);
      });
  }, []);

  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Comment trouver mon artisan ?</h2>
          <ul>
            <li>1. Chosisir la catégorie d'artisanat dans le menu.</li>
            <li>2. Choisir un artisan.</li>
            <li>3. Le contacter via le formulaire de contact.</li>
            <li>4. une réponse sera apportée sous 48H.</li>
          </ul>
        </section>

        <section>
          <h2>Les 3 artisans du mois</h2>
          {artisans.map((artisan) => (
            <CardArtisan
              key={artisan.id}
              nom={artisan.nom}
              note={artisan.note}
              ville={artisan.ville}
              specialite={artisan.Specialite.metier}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;
