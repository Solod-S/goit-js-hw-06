const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsListEl = document.querySelector("#ingredients");
// делаем переменную => єлемент UL
const createItemMarkUp = (ingredients) => {
  const massiveForReturn = [];
  ingredients.map((ingerdient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = ingerdient;
    massiveForReturn.push(itemEl);
  });
  return massiveForReturn;
};
// делаем функцию которая принимает массив с примитивами и возвращает массив разметки
ingredientsListEl.append(...createItemMarkUp(ingredients));
//отправляем все в документ
