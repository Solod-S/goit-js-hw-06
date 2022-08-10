const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryListEl = document.querySelector(".gallery");
// делаем переменную => єлемент UL
const makeTransactionMarcUp = (images) => {
  const { url, alt } = images;
  //деструктуризация
  return `
  <li>
 <img src="${url}" alt="${alt}"/>

  </li>
  `;
};
//делаем функцию которая принимает один объект из массива (images[1]) и  возвращает разметку

const createMarkup = images.map(makeTransactionMarcUp).join("");
// демаем переменную для дальнейшей отправки через insertAdjacentHTML
// берем входящий массив обьектов
//==> перебираем методом map
//==> вызываем колбек функцию которая делает разметку и получаем массив[  <li> <img src="${url}" alt="${alt}"/></li>]
//==> делаем строку методом join("")

galleryListEl.insertAdjacentHTML("beforeend", createMarkup);
//elem.insertAdjacentHTML(position, string);
// "beforebegin" - перед elem
// "afterbegin" - внутри elem, перед всеми детьми
// "beforeend" - внутри elem, после всех детей
// "afterend" - после elem
