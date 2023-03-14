const { DataTypes, Model } = require('sequelize');          // Import des classes du module sequelize
const sequelize = require('../services/databaseSequelize'); // Connexion de Sequelize vers Postgres

class History extends Model {}      // Définition d'une classe History qui étend la classe Model de Sequelize.

History.init({                      // Définition des atttributs
  year: {                    
    type: DataTypes.DATE,    
    allowNull: false         
  },                                                   
}, {                                // Définition des options
  sequelize,                  
  tableName: 'history',      
});

module.exports = History;    // Export de la classe History
