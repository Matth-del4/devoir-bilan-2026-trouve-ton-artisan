-- Insert des données dans la table "categorie"
INSERT INTO categorie (domaine) VALUES
('Alimentation'),
('Bâtiment'),
('Fabrication'),
('Services');

-- Insert des données dans la table "specialite"
INSERT INTO specialite (metier, categorie_id) VALUES
('Boucher', 1),
('Boulanger', 1),
('Chocolatier', 1),
('Traiteur', 1),
('Chauffagiste', 2),
('Électricien', 2),
('Menusier', 2),
('Plombier', 2),
('Bijoutier', 3),
('Couturier', 3),
('Ferronier', 3),
('Coiffeur', 4),
('Fleuriste', 4),
('Toiletteur', 4),
('Webdesign', 4);


INSERT INTO artisan (nom, note, ville, a_propos, mail, site_web, top, specialite_id) VALUES
('Boucherie Dumont', 4.5, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'boucherie.dumond@gmail.com', NULL, FALSE, 1),
('Au pain chaud', 4.8, 'Montélimart', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'aupainchaud@hotmail.com', NULL,TRUE, 2),
('Chocolaterie Labbé', 4.9, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'chocolaterie.labbe@gmail.com', 'https://www.chocolaterielabbe.fr', true, 3),
('Traiteur Truchon', 4.1, 'Lyon', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', 'contact@truchon-traiteur.fr', 'https://truchon-traiteur.fr', false, 4);
