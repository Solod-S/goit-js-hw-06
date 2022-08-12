const refs = {
  body: document.querySelector("body"),
  display: document.querySelector(".color"),
  changeColorBtn: document.querySelector(".change-color"),
  changeColorFn() {
    refs.body.style.backgroundColor = refs.getRandomHexColor();
    // функция ставит в инлайно css body backgroundcolor который получае с другой функции
    refs.display.textContent = refs.body.style.backgroundColor;
    // записуем в спан ==> <p>Background color: <span class="color">-</span></p> значение инлайн css body backgroundcolor
  },
  getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  },
  // генератор случайных палитр
};

// refs.body.style.backgroundColor = refs.getRandomHexColor();
refs.changeColorBtn.addEventListener("click", refs.changeColorFn);
// делаем <button type="button" class="change-color">Change color</button> слушателем событий и при клике (действие "click")  + выполняем колбек функцию из обьекта
