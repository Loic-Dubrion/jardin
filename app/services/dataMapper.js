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

    detailCarre : (id) => {
      const promiseData = client.query('SELECT * FROM carres WHERE id=$1', [id]);
      return promiseData;
    },

    listLegumes : () => {
      const promiseData = client.query('SELECT nom FROM legumes ORDER BY id ASC');
      return promiseData;   
     },
    
  }


  module.exports = dataMapper;