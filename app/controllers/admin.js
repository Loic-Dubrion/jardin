/* ========================================= 
*  CONTROLLER ADMIN
=========================================== */

// Import des modules
// const dataMapper = require('../services/dataMapper');


/* ========================================= 
*  OBJET CONTROLLER PAGES ADMIN
=========================================== */

const controllers = 
{

  indexAdmin: (req, res) => {                     
    res.render('./admin/index');
  },

  connectAdmin: (req, res) => { 
    res.render('./admin/connectAdmin');
  },

  gestionAdmin: (req, res) => {
    res.render('./admin/gestionAdmin');
  }

};


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = controllers;