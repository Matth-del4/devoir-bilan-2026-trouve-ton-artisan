import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import CardArtisan from "../components/CardArtisan";

function ListeArtisans() {
  const { id } = useParams();
  const [artisans, setArtisans] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/artisans/categorie/${id}`, {
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
  }, [id]);
  return (
    <div>
      <Header />
      <main>
        <section>
          <h2>Artisans de la catégorie {id}</h2>
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

export default ListeArtisans;
