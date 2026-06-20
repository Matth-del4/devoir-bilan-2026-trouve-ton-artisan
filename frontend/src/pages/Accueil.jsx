import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

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
        console.error("Error fetching artisans:", error);
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
          <ul>
            {artisans.map((artisan) => (
              <li key={artisan.id}>
                <h3>{artisan.nom}</h3>
                <p>Note : {artisan.note}</p>
                <p>{artisan.ville}</p>
              </li>
            ))}
          </ul>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Accueil;
