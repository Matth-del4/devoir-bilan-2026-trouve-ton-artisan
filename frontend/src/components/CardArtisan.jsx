import { Link } from "react-router-dom";
import { renderEtoiles } from "../utils/etoiles";

function CardArtisan({ nom, id, note, specialite, ville }) {
  const renderEtoiles = (note) => {
    const etoiles = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= note) {
        etoiles.push("★"); // étoile pleine
      } else {
        etoiles.push("☆"); // étoile vide
      }
    }
    return etoiles.join("");
  };
  return (
    <Link to={`/artisans/${id}`} className="card-artisan">
      <h3>{nom}</h3>
      <p>Note : {renderEtoiles(note)}</p>
      <p>Spécialité : {specialite}</p>
      <p>Ville : {ville}</p>
    </Link>
  );
}

export default CardArtisan;
