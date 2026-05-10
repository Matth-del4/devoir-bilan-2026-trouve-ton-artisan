// Création du modèle Sequelize pour la table "Artisan"
const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");
const Artisan = sequelize.define("Artisan", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nom: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  note: {
    type: DataTypes.DECIMAL(3, 1),
    allowNull: false,
  },
  ville: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  mail: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
  },
  site_web: {
    type: DataTypes.STRING(255),
    allowNull: true,
  },
  a_propos: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  top: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  specialite_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});
module.exports = Artisan;
