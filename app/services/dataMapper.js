/* ========================================= 
*  DATA MAPPER
=========================================== */

// Import des modules
const client = require('./dbClient');


/* ========================================= 
*  REQUETES SQL
=========================================== */

const dataMapper = 
  {
    listeCarres : () => {
      const promiseData = client.query('SELECT * FROM carres ORDER BY id ASC');
      return promiseData;
    },

    listLegumes : () => {
      const promiseData = client.query('SELECT nom FROM legumes ORDER BY nom ASC');
      return promiseData;   
    },
    
    listFamilles : () => {
      const listFamilles = client.query('SELECT * FROM familles');
      return listFamilles;
    },
    
    detailCarre : (id) => {
      const promiseData = client.query(`SELECT c.*, l.alliances           -- récupère les colonnes "c.*" de la table "carres" 
                                        FROM carres c                     -- ainsi que la colonne "l.alliances" de la table "legumes"
                                        JOIN legumes l                    -- jointure entre les tables "carres" et "legumes" 
                                        ON l.nom = ANY(c.composition)     -- sur la condition "l.nom = ANY(c.composition)" où "composition" est un tableau dans la table "carres"
                                        WHERE c.id = $1;`, [id]);        
      return promiseData;
    },

    detailCarreVide : (id) => {
      const promiseData = client.query(`SELECT * FROM carres WHERE id = $1`, [id]);
      return promiseData;
    },

    detailLegume : (legume) => {
      const promiseData = client.query('SELECT * FROM legumes WHERE nom=$1', [legume]);
      return promiseData;
    },

    ajoutLegume : (nom, variete, famille, alliances) => {
      client.query(`INSERT INTO legumes (nom, variete, type, alliances) 
                                        VALUES 
                                        ($1,$2,$3,$4)`, [nom, variete, famille, alliances]); 
      },

    suppressionLegume : (nom) => {
      client.query('DELETE FROM legumes WHERE nom=$1', [nom]);
    },

    ajoutLegCarre : (leg, idCarre) => {
      client.query(`INSERT INTO composition_legumes (carre_id, legume_nom)
                    VALUES ($1,$2)`, [idCarre,leg]);
      client.query(`UPDATE carres 
                    SET composition = (SELECT ARRAY_AGG(legume_nom) FROM composition_legumes WHERE carre_id = $1) 
                    WHERE id = $1`, [idCarre]);
    },

    supLegCarre : (leg, idCarre) => {
      client.query(`DELETE FROM composition_legumes WHERE carre_id = $1 AND legume_nom = $2 `, [idCarre, leg]);
      client.query(`UPDATE carres 
                    SET composition = (SELECT ARRAY_AGG(legume_nom) FROM composition_legumes WHERE carre_id = $1) 
                    WHERE id = $1`, [idCarre]);
    },

    toggleDispo : (idCarre) => {
      client.query(`UPDATE carres SET disponible = NOT disponible WHERE id = $1`,[idCarre])
    }

  }


  module.exports = dataMapper;