/* ========================================= 
*  CONTROLLER VISITEUR
=========================================== */

// Import des modules
const dataMapper = require('../services/dataMapper');


/* ========================================= 
*  OBJET CONTROLLER PAGES ADMIN
=========================================== */

const controllers = 
{

  indexVisiteur: async (req, res) => {               
    try {
      const result = await dataMapper.listeCarres();
      res.render('./visiteur/index', {result: result.rows});
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  },

  detailCarre: async (req, res) => {
    try {
      id = req.params.id;
      const result = await dataMapper.detailCarre(id);
      res.render('./visiteur/detailCarre', {result: result.rows[0]});
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },

  listLegumes: async (req, res) => {
    try {
      const result = await dataMapper.listLegumes();
      console.log(result.rows);
      res.render('./visiteur/listLegumes', {result: result.rows});
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },



};


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = controllers;