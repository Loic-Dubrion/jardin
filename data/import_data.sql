BEGIN;

INSERT INTO "category" ("name", "description") VALUES
('Feuilles', 'choux, salades (laitues, chicorées, mâches…), épinard…'),
('Racines', 'carotte, betterave, navet, radis, pomme de terre…'),
('Bulbes', 'poireau, ail, oignon, échalote…'),
('Graines', 'fèves, haricots, pois ou engrais vert'),
('Fruits', 'tomate, courgette, aubergine, potiron, concombre, cornichon…');

INSERT INTO "vegetable" ("id","name", "variety", "category_id", "description") VALUES
(1, 'Bettrave', '' , 2, ''),
(2, 'Poireaux', '' , 3, 'Planter près des épinards, navets, carottes'),
(3, 'Courgette', '' , 5, ''),
(4, 'Radis', '' , 2, ''),
(5, 'Haricots vert', '' , 4, 'A l''ombre des rames planter des salades'),
(6, 'Tomate', '' , 5, ''),
(7, 'Salade', '' , 1, ''),
(8, 'Pomme de terre', '' , 2, '');

INSERT INTO "square" ("id","available", "year", "comment")
VALUES 
  (1, True, '2023-01-01', ''),
  (2, True, '2023-01-01', ''),
  (3, True, '2023-01-01', ''),
  (4, True, '2023-01-01', ''),
  (5, True, '2023-01-01', ''),
  (6, True, '2023-01-01', ''),
  (7, True, '2023-01-01', ''),
  (8, True, '2023-01-01', ''),
  (9, True, '2023-01-01', ''),
  (10, True, '2023-01-01', ''),
  (11, True, '2023-01-01', ''),
  (12, True, '2023-01-01', ''),
  (13, True, '2023-01-01', ''),
  (14, True, '2023-01-01', ''),
  (15, True, '2023-01-01', ''),
  (16, True, '2023-01-01', ''),
  (17, True, '2023-01-01', '');

INSERT INTO "vegetable_has_square" ("square_id", "vegetable_id")
VALUES 
(1, 2),
(1, 3),
(1, 4),
(2, 5),
(2, 6);

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
