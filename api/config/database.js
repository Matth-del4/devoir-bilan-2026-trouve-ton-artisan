const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
// dotenv s'active avec .config juste après l'import
dotenv.config();

// Création d'une instance Sequelize pour se connecter à la base de données MySQL
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    // Configuration de la connexion à la base de données
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  },
);

// exportation de l'instance Sequelize pour l'utiliser dans d'autres parties de l'application
module.exports = sequelize;
