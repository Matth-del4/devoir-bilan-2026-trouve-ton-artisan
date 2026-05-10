const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");
// dotenv s'active avec .config juste après l'import
dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
  },
);

mdodule.exports = sequelize;
