/* ========================================= 
*  CONTROLLER utilisateur
=========================================== */

// Import des modules
const dataMapper = require('../services/dataMapper');


/* ========================================= 
*  OBJET CONTROLLER PAGES ADMIN
=========================================== */

const controllers = 
{

  indexutilisateur: async (req, res) => {               
    try {
      const result = await dataMapper.listeCarres();
      res.render('./utilisateur/index', {result: result.rows});
    } catch (err) {
      console.error(err);
      res.status(500);
    }
  },

  detailCarre: async (req, res) => {
    try {
      id = Number(req.params.id);
      let detail = await dataMapper.detailCarre(id);    // Je récupère le détail de mon carré

      if (detail.rows.length === 0) {                   // Si le carré ne comporte pas de detail
        detail = await dataMapper.detailCarreVide(id);  // Je retourne les infos de base
      }  

      let alliances = [];                                                 // Création array pour gestion des alliances
      for (let i = 0; i < detail.rows.length; i++) {                      // S'il y a des données 'alliance' je push
        alliances.push(detail.rows[i].alliances);
      }
      alliances = alliances.flat().filter(function(value, index, self) {  // "aplatis" mon tableau et supprime les doublons
        return self.indexOf(value) === index;
      });

      const legumes = await dataMapper.listLegumes();    // Retourne la liste des legumes
      res.render('./utilisateur/detailCarre', {result: detail.rows[0], legumes: legumes.rows, alliances});
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },

  listLegumes: async (req, res) => {
    try {
      const result = await dataMapper.listLegumes();
      res.render('./utilisateur/listLegumes', {result: result.rows});
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },

  detailLegume: async (req, res) => {
    try {
      const result = await dataMapper.detailLegume(req.params.id);
      res.render('./utilisateur/detailLegume', {result: result.rows[0]});
    } catch (err) {
      console.log(err);
      res.status(500);
    }
  },

  ajoutLegCarre: (req, res) => {
    idCarre = Number(req.body.idCarre);
    leg = req.body.ajoutLegCarre;
    compositionCarre = req.body.compositionCarre.split(',');
    if (compositionCarre.includes(leg)) {
      res.send(`${leg} fait déjà partie du carré !`);
    } else {
      dataMapper.ajoutLegCarre(leg, idCarre);
      res.redirect('/jardin/' + idCarre);
    }
  },

  supLegCarre : (req, res) => {
    const idCarre = Number(req.body.idCarre);
    leg = req.body.supLegCarre;
    dataMapper.supLegCarre(leg, idCarre);
    res.redirect('/jardin/' + idCarre);
  },

  toggleDispo : (req, res) => {
    const idCarre = Number(req.body.idCarre);
    dataMapper.toggleDispo(idCarre);
    res.redirect('/jardin/' + idCarre);
  },

};


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = controllers;