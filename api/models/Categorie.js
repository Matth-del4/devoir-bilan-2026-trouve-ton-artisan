// Création du modèle Sequelize pour la table "Categorie"
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Categorie = sequelize.define(
  "Categorie",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    domaine: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
  },
  {
    tableName: "categorie",
    timestamps: false,
  },
);
module.exports = Categorie;
