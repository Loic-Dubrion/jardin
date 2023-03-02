/*========================================= 
*  IMPORTATIONS DES MODULES 
===========================================*/

/** LES BIBLIOTHEQUES */
const express = require('express');
const session = require('express-session');       // équivalent des cookies côté serveur
require('dotenv').config();                       // on appelle directement config() sans stocker dans une variable

/** LES MODULES PERSONNELS */
const routers = require('./routers');                     // Gestion des routes
const errorHandler = require('./services/errorHandler');  // Gestion des erreurs


/*========================================= 
* CONFIGURATIONS 
===========================================*/

const app = express();                            // Instanciation de l'application express
const PORT = process.env.PORT || 5000;                    // Port de l'application

app.set('view engine', 'ejs');                    // Gestion du template
app.set('views',__dirname + '/views');            // Gestion du dossier views

app.use(express.static('public'));                // Gestion du dossier public
app.use(express.urlencoded({ extended: false })); // Rend disponible req.body

app.use(session({                                 // Initialise la session, rend disponible req.session
  secret: 'keyboard cat',                         // le "secret" qui sert à générer les tokens.
  resave: true,                                   // sauvegarde automatique de la session à la fin de la requête
  saveUninitialized: true,                        // sauvegarde de la session même si elle est vide
  cookie: {  }                                    // options pour le cookie qui contient le token.
}));


/*========================================= 
* DEFINITIONS DES ROUTES 
===========================================*/

app.use(routers);                                 // Entrée de la route (renvoi au fichier routers/router.js)
app.use(errorHandler);                            // Fin de la route - Gestion des erreurs


/*========================================= 
* ACTIVATION DU SERVER
===========================================*/

app.listen(PORT, () => {
  console.log(`Ecoute sur http://localhost:${PORT}`);
});