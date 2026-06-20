import { Link } from "react-router-dom";

function CardArtisan({ nom, id, note, specialite, ville }) {
  return (
    <Link to={`/artisans/${id}`} className="card-artisan">
      <h3>{nom}</h3>
      <p>Note : {note}</p>
      <p>Spécialité : {specialite}</p>
      <p>Ville : {ville}</p>
    </Link>
  );
}

export default CardArtisan;
