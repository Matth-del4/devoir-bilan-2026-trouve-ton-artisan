// route page header categories
const express = require("express");
const router = express.Router();
const Categorie = require("../models/Categorie");

router.get("/", async (req, res) => {
  try {
    const categories = await Categorie.findAll();
    res.json(categories);
  } catch (error) {
    console.error("Erreur lors de la récupération des catégories :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des catégories." });
  }
});

module.exports = router;
