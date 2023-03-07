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
      const detail = await dataMapper.detailCarre(id);
      console.log(detail.rows);
      let alliances = [];
      for (let i = 0; i < detail.rows.length; i++) {
        alliances.push(detail.rows[i].alliances);
      }
      alliances = alliances.flat().filter(function(value, index, self) {
        return self.indexOf(value) === index;
      });
      console.log(alliances);
      const legumes = await dataMapper.listLegumes();
      res.render('./utilisateur/detailCarre', {result: detail.rows[0], legumes: legumes.rows});
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
    dataMapper.ajoutLegCarre(leg, idCarre);
    res.redirect('/jardin/' + idCarre);
  },

  supLegCarre : (req, res) => {
    idCarre = Number(req.body.idCarre);
    leg = req.body.supLegCarre;
    dataMapper.supLegCarre(leg, idCarre);
    res.redirect('/jardin/' + idCarre);
  },



};


/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = controllers;