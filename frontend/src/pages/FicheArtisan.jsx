import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function FicheArtisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/artisans/${id}`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        setArtisan(response.data);
      })
      .catch((error) => {
        console.error("Error fetching artisan:", error);
      });
  }, [id]);
  return (
    <div>
      <Header />
      <main>
        {artisan && (
          <section>
            <h2>{artisan.nom}</h2>
            <p>Note: {artisan.note}</p>
            <p>Ville: {artisan.ville}</p>
            <p>Spécialité: {artisan.Specialite.metier}</p>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}

export default FicheArtisan;
