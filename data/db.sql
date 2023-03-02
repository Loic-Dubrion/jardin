/*==========================================
* CREATION DE LA BDD JARDIN
========================================= */

--Suppression des tables existantes
DROP TABLE IF EXISTS carres CASCADE;
DROP TABLE IF EXISTS legumes CASCADE;
DROP TABLE IF EXISTS composition_legumes CASCADE;
DROP TABLE IF EXISTS familles CASCADE;
DROP TABLE IF EXISTS historique CASCADE;


-- Creation des tables
CREATE TABLE IF NOT EXISTS familles (
  id SERIAL PRIMARY KEY,
  type VARCHAR(100) UNIQUE,
  commentaire TEXT
);

CREATE TABLE IF NOT EXISTS legumes (
  id SERIAL PRIMARY KEY,
  nom VARCHAR(100) UNIQUE NOT NULL,
  variete VARCHAR(100),
  type VARCHAR(100) REFERENCES familles(type),  
  alliances VARCHAR(100)[],
  FOREIGN KEY (type) REFERENCES familles(type)
);

CREATE TABLE IF NOT EXISTS carres (
  id SERIAL PRIMARY KEY,
  disponible BOOLEAN NOT NULL,
  composition VARCHAR(100)[],   
  annee DATE NOT NULL,
  commentaire TEXT
);

CREATE TABLE IF NOT EXISTS composition_legumes (
  id SERIAL PRIMARY KEY,
  carre_id INTEGER REFERENCES carres (id),
  legume_nom VARCHAR(100) REFERENCES legumes (nom),
  FOREIGN KEY (carre_id) REFERENCES carres (id),
  FOREIGN KEY (legume_nom) REFERENCES legumes (nom)
);

CREATE TABLE IF NOT EXISTS historique (
  id SERIAL PRIMARY KEY,
  annee DATE NOT NULL,
  carre INTEGER REFERENCES carres(id),
  composition VARCHAR(100)[],
  FOREIGN KEY (carre) REFERENCES carres(id)
);

/*==========================================
* Insertion des données
========================================= */

-- TENIR COMPTE DES CONTRAINTES POUR L'ORDRE DE CREATION
INSERT INTO familles (type, commentaire)
VALUES 
  ('Feuilles', 'choux, salades (laitues, chicorées, mâches…), épinard…'),
  ('Racines', 'carotte, betterave, navet, radis, pomme de terre…'),
  ('Grains', 'fèves, haricots, pois ou engrais vert'),
  ('Fruits', 'tomate, courgette, aubergine, potiron, concombre, cornichon…'),
  ('Bulbes', 'poireau, ail, oignon, échalote…');

INSERT INTO legumes (nom, variete, type, alliances)
VALUES 
  ('Bettrave', '' , 'Racines', '{chou, céleri, laitue, oignon}'),  --IMPORTANT SINGLE COTE !!!
  ('Poireaux', '' , 'Bulbes', '{carotte, céleri}');

INSERT INTO carres (disponible, composition, annee, commentaire)
VALUES 
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', ''),
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', '');

INSERT INTO composition_legumes (carre_id, legume_nom)
VALUES 
  (1, 'Poireaux'),
  (1, 'Bettrave');

UPDATE carres
SET composition = (SELECT ARRAY_AGG(legume_nom) FROM composition_legumes WHERE carre_id = 1)
WHERE id = 1;