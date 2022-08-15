const refs = {
  input: document.querySelector("#validation-input"),
  onInputWhenBlur(event) {
    const inputDataSet = Number(refs.input.dataset.length);
    // делаю переменную для требования по вводу
    // refs.input.dataset.length приводим к числу (изначально там строка "6")
    if (event.currentTarget.value.length < inputDataSet) {
      // refs.input.dataset.length === атрибут data-length="6" в input
      // если длинна введенной строки в инпуте меньше заданной цифры в атрибуте data-length
      refs.input.classList.add("invalid");
      // добавляем инпуту класс invalid
    } else if (
      event.currentTarget.value.length > inputDataSet ||
      event.currentTarget.value.length === inputDataSet
    ) {
      // refs.input.dataset.length === атрибут data-length="6" в input
      // если длинна введенной строки в инпуте больше заданной цифры в атрибуте data-length
      // и если длинна введенной строки в инпуте === заданной цифры в атрибуте data-length
      refs.input.classList.replace("invalid", "valid");
      // заменяем инпут класс invalid на valid
    }
    if (event.currentTarget.value.length === 0) {
      refs.input.classList.remove("invalid");
      refs.input.classList.remove("valid");
    }
    // если удалим все с инпуто то пусться обнулиться
  },
};
// делаю объект «Объект ссылок»
// в нем делаю ключи = элементы
// делаю метод объекта

refs.input.addEventListener("blur", refs.onInputWhenBlur);
// делаем input слушателем события и при вводе (действие "blur")  + выполняем колбек функцию из объекта

// const refs = {
//   input: document.querySelector("#validation-input"),
//   onInputWhenBlur(event) {
//     if (event.currentTarget.value.length < refs.input.dataset.length) {
//       // console.log("!");
//       // refs.input.dataset.length === атрибут data-length="6" в input
//       // если длинна введенной строки в инпуте меньше заданной цифры в атрибуте data-length
//       refs.input.classList.add("invalid");
//       // добавляем инпуту класс invalid
//     } else if (event.currentTarget.value.length >= refs.input.dataset.length) {
//       // refs.input.dataset.length === атрибут data-length="6" в input
//       // если длинна введенной строки в инпуте больше заданной цифры в атрибуте data-length
//       refs.input.classList.replace("invalid", "valid");
//       // заменяем инпут класс invalid на valid
//     }
//     if (event.currentTarget.value.length === 0) {
//       refs.input.classList.remove("invalid");
//       refs.input.classList.remove("valid");
//     }
//     // console.log(event.currentTarget.value.length);
//   },
// };
