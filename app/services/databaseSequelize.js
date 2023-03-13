/*==============================
======== ACCES A LA BDD ========
==============================*/

// Importation du module dotenv
require('dotenv').config();

// Importation de la classe Sequelize depuis le module sequelize
const { Sequelize } = require('sequelize');

// On connecte Sequelize à notre SGBD PostGres
const sequelize = new Sequelize(process.env.PG_URL, {
  define: {                     // Permet de définir des options pour tous les modèles & toutes les tables
    timestamps: true,           // Gestion automatique des timestamps sur les champs createdAt & updatedAt
    createdAt: "created_at",    // On override le nom des champs
    updatedAt: "updated_at",
    underscored: true,          // Passe les noms de champs de camelCase à snake_case
  },
});

// Test de la connexion à la base de données
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

testConnection();

// Export du module
module.exports = sequelize;
