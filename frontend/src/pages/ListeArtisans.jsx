import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CardArtisan from "../components/CardArtisan";
import "../styles/main.scss";

function ListeArtisans() {
  const { id } = useParams();
  const [artisans, setArtisans] = useState([]);
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/artisans/categorie/${id}`, {
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
  }, [id]);
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Artisans de la catégorie {id}</h2>
          <div className="row">
            {artisans.map((artisan) => (
              <div className="col-md-6 col-lg-4" key={artisan.id}>
                <CardArtisan
                  key={artisan.id}
                  id={artisan.id}
                  nom={artisan.nom}
                  note={artisan.note}
                  ville={artisan.ville}
                  specialite={artisan.Specialite.metier}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default ListeArtisans;
