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
      const promiseData = client.query(`SELECT c.*, l.alliances
                                        FROM carres c
                                        JOIN legumes l ON l.nom = ANY(c.composition)
                                        WHERE c.id = $1;`, [id]);               
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

  }


  module.exports = dataMapper;