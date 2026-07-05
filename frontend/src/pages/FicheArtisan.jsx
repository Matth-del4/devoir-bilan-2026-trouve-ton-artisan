import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "../styles/FicheArtisan.scss";
import { renderEtoiles } from "../utils/etoiles";

function FicheArtisan() {
  const { id } = useParams();
  const [artisan, setArtisan] = useState(null);
  const [formData, setFormData] = useState({
    nom: "",
    email: "",
    objet: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/artisans/${id}`, {
        headers: {
          "x-api-key": import.meta.env.VITE_API_KEY,
        },
      })
      .then((response) => {
        setArtisan(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la récupération de l'artisan :", error);
      });
  }, [id]);
  return (
    <div>
      <Header />
      <main>
        {artisan && (
          <section>
            <h2>{artisan.nom}</h2>
            <p>{renderEtoiles(artisan.note)}</p>
            <p>Ville: {artisan.ville}</p>
            <p>Spécialité: {artisan.Specialite.metier}</p>
            <p>
              <strong>À propos :</strong> {artisan.a_propos}
            </p>
          </section>
        )}
        <section>
          <h2>Contacter {artisan?.nom}</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nom"
              placeholder="Votre nom"
              value={formData.nom}
              onChange={handleChange}
            />
            <input
              type="email"
              name="email"
              placeholder="Votre email"
              value={formData.email}
              onChange={handleChange}
            />
            <input
              type="text"
              name="objet"
              placeholder="Votre objet"
              value={formData.objet}
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Votre message"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit">Envoyer</button>
          </form>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default FicheArtisan;
