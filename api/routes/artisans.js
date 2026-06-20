const express = require("express");
const router = express.Router();
const Artisan = require("../models/Artisan");
const Specialite = require("../models/Specialite");
const { Op } = require("sequelize");

// Route page d'accueil avec top artisans
router.get("/top", async (req, res) => {
  try {
    const artisans = await Artisan.findAll({
      where: { top: true },
      include: [{ model: Specialite }],
    });
    res.json(artisans);
  } catch (error) {
    console.error("Erreur lors de la récupération des artisans :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des artisans." });
  }
});

// route page liste des artisans par catégorie
router.get("/categorie/:id", async (req, res) => {
  const categoryId = req.params.id;
  try {
    const artisans = await Artisan.findAll({
      include: [
        {
          model: Specialite,
          where: { categorie_id: categoryId },
        },
      ],
    });
    res.json(artisans);
  } catch (error) {
    console.error("Erreur lors de la récupération des artisans :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération des artisans." });
  }
});

// route barre de recherche uniquement sur le nom de l'artisan
router.get("/search", async (req, res) => {
  const query = req.query.search;
  try {
    const artisans = await Artisan.findAll({
      where: {
        nom: { [Op.like]: `%${query}%` },
      },
    });
    res.json(artisans);
  } catch (error) {
    console.error("Erreur lors de la recherche d'artisans :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la recherche d'artisans." });
  }
});

//route page fiche artisan
router.get("/:id", async (req, res) => {
  const artisanId = req.params.id;
  try {
    const artisan = await Artisan.findByPk(artisanId, {
      include: [{ model: Specialite }],
    });
    if (!artisan) {
      return res.status(404).json({ message: "Artisan non trouvé." });
    }
    res.json(artisan);
  } catch (error) {
    console.error("Erreur lors de la récupération de l'artisan :", error);
    res
      .status(500)
      .json({ message: "Erreur lors de la récupération de l'artisan." });
  }
});

module.exports = router;
