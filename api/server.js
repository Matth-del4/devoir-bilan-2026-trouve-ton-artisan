// Importation des modules nécessaires
const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const authMiddleware = require("./middleware/auth");
const routes = require("./routes/artisans");
const categoriesRoutes = require("./routes/categories");
require("./models/index"); // Importer les modèles pour établir les associations

// Configuration de la connexion à la base de données
const sequelize = require("./config/database");
sequelize
  .authenticate()
  .then(() => {
    console.log("La connexion à la base de données a été établie avec succès.");
  })
  .catch((err) => {
    console.error("Impossible de se connecter à la base de données :", err);
  });

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api", authMiddleware); // Mettre avnt les routes pour protéger les endpoints avec l'authentification
app.use("/api/artisans", routes);
app.use("/api/categories", categoriesRoutes);
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Le serveur est en cours d'exécution sur le port ${PORT}`);
});
