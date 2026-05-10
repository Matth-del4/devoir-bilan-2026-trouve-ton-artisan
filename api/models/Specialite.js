// Création du modèle Sequelize pour la table "Specialite"
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Specialite = sequelize.define("Specialite", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  metier: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  categorie_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, {
  tableName: "specialite",
  timestamps: false,
});
module.exports = Specialite;
