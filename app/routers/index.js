/* ========================================= 
*  POINT D'ENTREE ROUTER
=========================================== */

// Importations des modules
const express = require('express');
const routers = express.Router();

const accueil = require('./accueil');
const utilisateur = require('./utilisateur');
const admin = require('./admin');


/* ========================================= 
* DEFINITIONS DES ROUTES 
=========================================== */

routers.use(accueil);
routers.use(utilisateur);
routers.use(admin);


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = routers;