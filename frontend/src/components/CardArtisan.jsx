function CardArtisan({ nom, note, specialite, ville }) {
  return (
    <div className="card-artisan">
      <h3>{nom}</h3>
      <p>Note : {note}</p>
      <p>Spécialité : {specialite}</p>
      <p>Ville : {ville}</p>
    </div>
  );
}
export default CardArtisan;
