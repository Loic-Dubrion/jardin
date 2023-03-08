/* ========================================= 
*  ROUTER utilisateur
=========================================== */

// Importations des modules
const express = require('express');
const router = express.Router();

utilisateurController = require('../controllers/utilisateur');


/* ========================================= 
* DEFINITIONS DES ROUTES 
=========================================== */

router.get('/jardin', utilisateurController.indexutilisateur);
router.get('/jardin/:id', utilisateurController.detailCarre);
router.post('/jardin/ajoutLegCarre', utilisateurController.ajoutLegCarre);
router.post('/jardin/supLegCarre', utilisateurController.supLegCarre);
router.post('/jardin/toggle', utilisateurController.toggleDispo);
router.get('/legumes', utilisateurController.listLegumes);
router.get('/legumes/:id', utilisateurController.detailLegume);


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = router;