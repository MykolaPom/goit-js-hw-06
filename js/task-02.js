const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const listOfIngredientsEl = document.querySelector("#ingredients");
// console.log(listEl);

const listArray = ingredients.map((ingredient) => {
  const listItemEl = document.createElement("li");

  listItemEl.textContent = ingredient;
  listItemEl.classList.add('item');

  return listItemEl;
});

listOfIngredientsEl.append(...listArray);
console.log(listOfIngredientsEl);
