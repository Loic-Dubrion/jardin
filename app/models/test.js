const { Vegetable, Square, Category } = require('./index');

async function allSquare() {
  const result = await Square.findAll();
  console.log(JSON.stringify(result, null, 2));
}

async function SquareWithVegetable() {
  const result = await Square.findAll({ 
    include: "vegetables",
  });
  console.log(JSON.stringify(result, null, 2));
}

async function SquareVegetablesCategory() {
  const result = await Square.findByPk(1, { 
    include: [
      {
        association:"vegetables",
        include: "vegetablesBycategory"
      }
    ],
  });
  console.log(JSON.stringify(result, null, 2));
}

async function SquareListVegetables() {
  const result = await Square.findByPk(1, { 
    include: "vegetables"
  });
  console.log(JSON.stringify(result.vegetables, null, 2));
  // pour le tableau map prend chaque élément (vegetable) extrait la valeur de l'attribut name et retourne un tableau
  const vegetableNames = result.vegetables.map((vegetable) => vegetable.name);
  console.log(vegetableNames);
}

// AllSquare();
// SquareWithVegetable();
// SquareVegetablesCategory();
SquareListVegetables();
