/* ========================================= 
*  CONTROLLER ADMIN
=========================================== */

const dataMapper = require("../services/dataMapper");

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

  gestionAdmin: async (req, res) => {
    try {
      const listLegumes = await dataMapper.listLegumes();
      console.log(listLegumes.rows);
      const listFamilles = await dataMapper.listFamilles();
      res.render('./admin/gestionAdmin', { legumes : listLegumes.rows, familles : listFamilles.rows});
    } catch (err) {
      console.error(err);
      res.status(500).render('errors/500')
    }
  },

  postAjoutLegume: async (req, res) => {
    let nom = req.body.nom.toLowerCase();               
    nom = nom.charAt(0).toUpperCase() + nom.slice(1);     // Convertis le string en "String"
    const variete = req.body.variete;                     // Récupère les infos du form
    const famille = req.body.famille;
    const alliances = [];                                 // Création d'un array alliances
      if (req.body.alliances) {                           // Ajout des valeurs saisis dans le tableau
        if (typeof(req.body.alliances) === 'string') {
          alliances.push(req.body.alliances);
        } else {
          alliances = req.body.alliances;
        }
      }
    try {
      const result = await dataMapper.ajoutLegume(nom, variete, famille, alliances);
      res.send(`nom : ${nom}, variété : ${variete}, famille : ${famille}, alliances : ${alliances} ont bien été ajouté à la base de données`);
    } catch (err) {
      console.error(err);
      res.status(500).render('errors/500')
    }
  },

  postModifLegume: async (req, res) => {
    res.send('Controller et dataMapper à créer !')
  },

  postSuppressionLegume: async (req, res) => {
    const nom = req.body.suppressionLegume;
    console.log(nom);
    try {
      const result = await dataMapper.suppressionLegume(nom);
      res.send(`nom : ${nom} a bien été supprimé la base de données`);
    } catch (err) {
      console.error(err);
      res.status(500).render('errors/500')
    }
  }


};


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = controllers;