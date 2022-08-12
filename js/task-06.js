const refs = {
  input: document.querySelector("#validation-input"),
  onInputWhenInput(event) {
    if (event.currentTarget.value.length < refs.input.dataset.length) {
      // refs.input.dataset.length === атрибут data-length="6" в input
      // если длинна введенной строки в инпуте меньше заданной цифры в атрибуте data-length
      refs.input.classList.add("invalid");
      // добавляем инпуту класс invalid
    } else if (event.currentTarget.value.length >= refs.input.dataset.length) {
      // refs.input.dataset.length === атрибут data-length="6" в input
      // если длинна введенной строки в инпуте больше заданной цифры в атрибуте data-length
      refs.input.classList.replace("invalid", "valid");
      // заменяем инпут класс invalid на valid
    }
    if (event.currentTarget.value.length === 0) {
      refs.input.classList.remove("invalid");
      refs.input.classList.remove("valid");
    }
    console.log(event.currentTarget.value.length);
  },
};
// делаю объект «Объект ссылок»
// в нем делаю ключи = элементы
// делаю метод объекта

refs.input.addEventListener("input", refs.onInputWhenInput);
// делаем input слушателем события и при вводе (действие "input")  + выполняем колбек функцию из обьекта
console.log(refs.input.textContent.length);
