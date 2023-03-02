/* ========================================= 
*  ROUTER VISITEUR
=========================================== */

// Importations des modules
const express = require('express');
const router = express.Router();

visiteurController = require('../controllers/visiteur');


/* ========================================= 
* DEFINITIONS DES ROUTES 
=========================================== */

router.get('/jardin', visiteurController.indexVisiteur);
router.get('/jardin/:id', visiteurController.detailCarre);
router.get('/legumes', visiteurController.listLegumes);


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = router;