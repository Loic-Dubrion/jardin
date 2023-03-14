const { DataTypes, Model } = require('sequelize');          // Import des classes du module sequelize
const sequelize = require('../services/databaseSequelize'); // Connexion de Sequelize vers Postgres

class Category extends Model {}      // !Définition d'une classe Category qui étend la classe Model de Sequelize.

Category.init({
  name: {                    // !Initialisation de la classe Category avec les attributs suivants :
    type: DataTypes.STRING,  // Définition de l'attribut description 
    allowNull: false         // de type STRING (chaine de caractères) 
  },                         // et qui ne peut pas être nul (allowNull: false).
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }                               
  
}, {                          // !Définition d'options pour le modèle :
  sequelize,                  // Utilisation de l'objet sequelize pour définir le modèle.
  tableName: 'category',      // Nom de la table PostgreSQL où seront stockées les réponses.    
});

module.exports = Category;    // Export de la classe Answer pour pouvoir l'utiliser dans d'autres fichiers.
