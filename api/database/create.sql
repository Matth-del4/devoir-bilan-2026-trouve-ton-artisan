-- script SQL pour créer les tables de la base de données

-- Table pour les catégories d'artisans
CREATE TABLE categorie (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    domaine VARCHAR(255));

-- Table pour les spécialités d'artisans
CREATE TABLE specialite (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    metier VARCHAR(255) NOT NULL,
    categorie_id INT NOT NULL,
    FOREIGN KEY (categorie_id) REFERENCES categorie(id));

-- Table pour les artisans
CREATE TABLE artisan (
    id INT AUTO_INCREMENT PRIMARY KEY, 
    nom VARCHAR(255) NOT NULL,
    note DECIMAL(3.1) NOT NULL,
    ville VARCHAR(255) NOT NULL,
    mail VARCHAR(255) NOT NULL,
    site_web VARCHAR(255),
    a_propos TEXT NOT NULL,
    `top` BOOLEAN NOT NULL,
    specialite_id INT NOT NULL,
    FOREIGN KEY (specialite_id) REFERENCES specialite(id)
);