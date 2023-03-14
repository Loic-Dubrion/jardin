/* ================================
ASSOCIATIONS ENTRE LES MODELES 
================================ */

const Category = require('./Category');
const History = require('./History');
const Square = require('./Square');
const Vegetable = require('./Vegetable');

// One-to-One : hasOne + belongsTo
// One-to-Many : hasMany + belongsTo
// Many-to-Many : belongsToMany + belongsToMany

// Vegetable < - > Category (One-to-Many association)
Category.hasMany(Vegetable, {       // Une catégorie comprend plusieurs légumes 
  foreignKey: 'category_id',        // Création d'un alias
  as: 'category'                    // Création d'un second alias permet d'interroger la BDD
});
Vegetable.belongsTo(Category, {     // Un légume n'appartient qu'a une seule catécorie
  foreignKey: 'category_id',        // Création d'un alias
  as: 'vegetablesBycategory'                  // Création d'un second alias permet d'interroger la BDD
});

// Vegetable < - > Square (Many-to-Many association)
Vegetable.belongsToMany(Square, {   // Plusieurs légumes peuvent être dans plusieurs carrés
  through: 'vegetable_has_square',  // Via la table de liaison 'vegetable_has_square'
  as: 'squares',                    // Alias pour récupérer carrés qui ont un légume
  foreignKey: 'vegetable_id',       
});
Square.belongsToMany(Vegetable, {   // Plusieurs carrés peuvent avoir plusieurs légumes
  through: 'vegetable_has_square',  // Via la table de liaison 'vegetable_has_square'
  as: 'vegetables',                 // Alias pour récupérer la liste des légumes qui compose 1 carré
  foreignKey: 'square_id'
});

// History < - > Square (One-to-Many association)
// Square.belongsTo(History, {         // Un carré appartient à un historique
//   foreignKey: 'square_id',          // clé étrangère de l'historique
//   as: 'history'                     // alias pour récupérer l'historique du carré
// });

// History.hasMany(Square, {           // un historique peut avoir plusieurs carrés
//   foreignKey: 'square_id',         // clé étrangère de l'historique sur la table des carrés
//   as: 'squares'                     // alias pour récupérer les carrés de l'historique
// });


module.exports = { Category, Square, History, Vegetable}