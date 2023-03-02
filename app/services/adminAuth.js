/* ========================================= 
*  MIDDELWARE DE CONTROLE D'IDENTIFICATION
=========================================== */



const adminAuth = (req, res, next) => {
  if (req.session.login === 'loic' && req.session.password === 'loic') {
    next();
  } else {
    res.send('Veuillez vous connecter en tant qu\'administrateur');
  }
};

module.exports = adminAuth;