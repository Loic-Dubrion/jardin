/* ========================================= 
*  ROUTER ADMIN
=========================================== */

// Importations des modules
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');
const adminAuth = require('../services/adminAuth');


/* ========================================= 
* DEFINITIONS DES ROUTES 
=========================================== */

router.get('/admin', adminController.indexAdmin);
router.get('/admin/connexion', adminController.connectAdmin);

router.post('/admin/connexion', (req, res) => {                // Identification
  const userLogin = req.body.login;
  req.session.login = req.body.login;
  const userPassword = req.body.password;
  req.session.password = req.body.password;
  console.log(userLogin, userPassword);
  userLogin && userPassword ? res.redirect('/admin/gestionAdmin') : res.redirect('/');
});

router.get('/admin/gestionAdmin', adminAuth, adminController.gestionAdmin);
// router.post('/admin/search_student', adminAuth, adminController.searchStudentPost);
// router.get('/admin/delete_student/:id', adminAuth, adminController.deleteStudent);

/* ========================================= 
* EXPORT DU MODULE
=========================================== */

module.exports = router;
