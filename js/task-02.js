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
  return ingredients.map((ingerdient) => {
    const itemEl = document.createElement("li");
    itemEl.classList.add("item");
    itemEl.textContent = ingerdient;
    return itemEl;
  });
};
// делаем функцию которая принимает массив с примитивами и возвращает массив разметки, которой становиться равна
// map перебирает массив с примитивами поэлементно, на каждой итерации создает переменную с элементом разметки(классом + уникальным текстом из входящего массива) и возвращает в createItemMarkUp [] (map делает массив)
ingredientsListEl.append(...createItemMarkUp(ingredients));
//отправляем все в документ за один раз ( апенд + распыливаем массив)
