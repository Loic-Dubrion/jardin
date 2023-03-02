/*=================================
* Middelware de gestion des erreurs
*==================================*/

module.exports = (req, res) => {

  if(res.statusCode === 404)
  {
    res.render('errors/404'); // j'affiche ma page d'erreur correspondant
  }
  if(res.statusCode === 500)
  {
    res.render('errors/500'); // j'affiche ma page d'erreur correspondant
  }  
};