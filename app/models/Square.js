// Import des classes du module sequelize
const { DataTypes, Model } = require('sequelize'); 

// Connexion de Sequelize vers Postgres     
const sequelize = require('../services/databaseSequelize'); 

// Définition d'une classe Square qui étend la classe Model de Sequelize.
class Square extends Model {}      

Square.init({
  // Définition des atttributs                      
  available: {
    type: DataTypes.BOOLEAN,
    allowNull: false
  },
  year: {                    
    type: DataTypes.DATE,    
    allowNull: false         
  },
  comment: {
   type: DataTypes.TEXT, 
   allowNull: true 
  }                                                   
}, {
   // Définition des options                               
  sequelize,                  
  tableName: 'square',      
});

// Export de la classe Square
module.exports = Square;    