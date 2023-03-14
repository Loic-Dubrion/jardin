// Import des classes du module sequelize
const { DataTypes, Model } = require('sequelize'); 

// Connexion de Sequelize vers Postgres     
const sequelize = require('../services/databaseSequelize'); 

// Définition d'une classe Vegetable qui étend la classe Model de Sequelize.
class Vegetable extends Model {}      

Vegetable.init({
  // Définition des atttributs                      
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  variety: {
    type: DataTypes.STRING,
    allowNull: true
  }, 
  description: {
   type: DataTypes.TEXT, 
   allowNull: true 
  }                                                   
}, {
   // Définition des options                               
  sequelize,                  
  tableName: 'vegetable',      
});

// Export de la classe Vegetable
module.exports = Vegetable;    