const allElements = document.querySelectorAll(".item");
// делаем переменную => со всеми Ul у которых есть класс item === все наши категории
console.log(`Number of categories: ${allElements.length}`);
// Number of categories = длинна (количество элементов ) в корне allCategories

for (let element of allElements) {
  console.log(`Category: ${element.firstElementChild.textContent}`);
  console.log(`Elements: ${element.lastElementChild.children.length}`);
}
// запускаем цикл, перебираем и выводим информацию
