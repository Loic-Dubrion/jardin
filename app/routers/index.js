/* ========================================= 
*  POINT D'ENTREE ROUTER
=========================================== */

// Importations des modules
const express = require('express');
const routers = express.Router();

const accueil = require('./accueil');
const visiteur = require('./visiteur');
const admin = require('./admin');


/* ========================================= 
* DEFINITIONS DES ROUTES 
=========================================== */

routers.use(accueil);
routers.use(visiteur);
routers.use(admin);


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = routers;