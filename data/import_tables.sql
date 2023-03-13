BEGIN;    -- BEGIN déclare le début d'une transaction 

--Suppression des tables existantes
DROP TABLE IF EXISTS 
"square",
"vegetable",
"vegetable_has_square",
"category",
"history";

-- -----------------------------------------------------
-- Table "category" ------------------------------------
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "category" (
  "id" SERIAL PRIMARY KEY,     
  "name" VARCHAR(100) UNIQUE,
  "description" TEXT,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "vegetables" ----------------------------------
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "vegetable" (
  "id" SERIAL PRIMARY KEY,
  "name" VARCHAR(100),
  "variety" VARCHAR(100),
  "category_id" INTEGER,
  "description" text,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "square"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "square" (
  "id" SERIAL PRIMARY KEY,
  "available" BOOLEAN,
  "composition" VARCHAR(100)[],
  "year" DATE NOT NULL,
  "comment" TEXT,
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table "history"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "history" (
  "id" SERIAL PRIMARY KEY,
  "year" DATE NOT NULL,
  "square_id" INTEGER,
  "composition" VARCHAR(100)[],
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz
);

-- -----------------------------------------------------
-- Table of link "vegetables_list"
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS "vegetable_has_square" (
  "id" SERIAL PRIMARY KEY,
  "square_id" integer NOT NULL REFERENCES "square" ("id"),
  "vegetable_id" integer NOT NULL REFERENCES "vegetable" ("id"),
  "created_at" timestamptz NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" timestamptz,
  UNIQUE ("square_id", "vegetable_id")
);

COMMIT; -- Pour mettre fin à au bloc de transaction et l'exécuter