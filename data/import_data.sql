BEGIN;

INSERT INTO "category" ("name", "description") VALUES
('Feuilles', 'choux, salades (laitues, chicorées, mâches…), épinard…'),
('Racines', 'carotte, betterave, navet, radis, pomme de terre…'),
('Bulbes', 'poireau, ail, oignon, échalote…'),
('Graines', 'fèves, haricots, pois ou engrais vert'),
('Fruits', 'tomate, courgette, aubergine, potiron, concombre, cornichon…');

INSERT INTO "vegetable" ("name", "variety", "category_id", "description") VALUES
('Bettrave', '' , 2, ''),
('Poireaux', '' , 3, 'Planter près des épinards, navets, carottes'),
('Courgette', '' , 5, ''),
('Radis', '' , 2, ''),
('Haricots vert', '' , 4, 'A l''ombre des rames planter des salades'),
('Tomate', '' , 5, ''),
('Salade', '' , 1, ''),
('Pomme de terre', '' , 2, '');

INSERT INTO "square" ("available", "composition", "year", "comment")
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
  (True, ARRAY[]::VARCHAR(100)[], '2023-01-01', '');

-- On rajoute les clés étrangères
ALTER TABLE "vegetable" 
  ADD FOREIGN KEY ("category_id") REFERENCES "category" ("id");

ALTER TABLE "vegetable_has_square"
  ADD FOREIGN KEY ("square_id") REFERENCES "square" ("id");

ALTER TABLE "vegetable_has_square"
  ADD FOREIGN  KEY ("vegetable_id") REFERENCES "vegetable" ("id");

COMMIT;


BEGIN;

SELECT setval('category_id_seq', (SELECT MAX(id) from "category"));
SELECT setval('vegetable_id_seq', (SELECT MAX(id) from "vegetable"));
SELECT setval('square_id_seq', (SELECT MAX(id) from "square"));
SELECT setval('history_id_seq', (SELECT MAX(id) from "history"));

COMMIT;
