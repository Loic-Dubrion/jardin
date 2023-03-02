/* ========================================= 
*  ROUTER ACCUEIL
=========================================== */

// Importations des modules
const express = require('express');
const router = express.Router();


/* ========================================= 
* DEFINITIONS DES ROUTES 
=========================================== */

router.get('/', (req, res, next) => {
  res.render('index');
  next();
  });

/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = router;