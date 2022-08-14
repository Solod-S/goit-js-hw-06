const refs = {
  input: document.querySelector("#controls input"),
  createBtn: document.querySelector("[data-create"),
  resetBtn: document.querySelector("[data-destroy"),
  divArea: document.querySelector("#boxes"),
  // то что находиться в input когда мы нажимаем кнопку createBtn
  arrayWithData: [],
  // массив объектов из которого будем собирать елементы (дивы)
  arrayForDom: [],
  // массив (виноградная лоза) с кучей элементов которые мы за раз передадим в DOM
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },
  // Функция создания рандомного цвета
  createBoxes() {
    refs.createArray(refs.input.value);
    //колбек функция создания массива с объектами
    for (let { color, width, height } of refs.arrayWithData) {
      const divEl = document.createElement("div");
      //
      divEl.classList.add("crating-collection__div");

      divEl.style.backgroundColor = color;
      divEl.style.width = width + "px";
      divEl.style.height = height + "px";
      refs.arrayForDom.push(divEl);
    }
    // в цикле перебираем массив объектов, создаем див єлемент с параметрами из массива обїектов и пушем его в arrayForDom (который будем апендить в DOm)
    refs.divArea.append(...refs.arrayForDom);
    // после того как с помощью цикла создали массив элементов, за один раз все отправляем в DOm
    refs.arrayWithData = [];
    refs.arrayForDom = [];
    refs.input.value = "";

    //ресетим все значения
  },

  createArray(amount) {
    let value = 20;
    // стартовое значение width и height
    //создаем переменную с стартовым значением
    for (let i = 1; i <= amount; i += 1) {
      value += 10;
      // на каждой итерации значение становиться +10
      const obj = {
        color: refs.getRandomHexColor(),
        width: value,
        height: value,
      };
      // значения берем с колбек функции (генератор цвета) + переменной value
      refs.arrayWithData.push(obj);
      // на каждой итерации пешим новый объект в массив
    }
    //получаем из refs.value число по какому понимаем конечное значение счетчика в цикле, запускаем цикл и на каждой итарации создаем объект в который записуем color, width и height
  },

  clear() {
    refs.divArea.innerHTML = "";
    // чистим html
    refs.input.value = "";
    // чистим введенные данные
  },
};

refs.createBtn.addEventListener("click", refs.createBoxes);
// делаем <button type="button" data-create>Create</button> слушателем событий и при клике (действие "click")  + выполняем колбек функцию из объекта
refs.resetBtn.addEventListener("click", refs.clear);
// делаем <button type="button" data-destroy>Destroy</button> слушателем событий и при клике (действие "click")  + выполняем колбек функцию из объекта
