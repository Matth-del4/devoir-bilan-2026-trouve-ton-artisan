//importation des modèles
const Categorie = require("./Categorie");
const Specialite = require("./Specialite");
const Artisan = require("./Artisan");

// Associations
Artisan.belongsTo(Specialite, { foreignKey: "specialite_id" });
Categorie.hasMany(Specialite, { foreignKey: "categorie_id" });
Specialite.hasMany(Artisan, { foreignKey: "specialite_id" });
Specialite.belongsTo(Categorie, { foreignKey: "categorie_id" });

// Exportation des modèles
module.exports = {
  Categorie,
  Specialite,
  Artisan,
};
